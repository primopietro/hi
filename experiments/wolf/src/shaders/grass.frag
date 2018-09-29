// grass.frag
#extension GL_EXT_shader_texture_lod : enable

#define SHADER_NAME Grass

precision highp float;
varying vec2 		vTextureCoord;
varying vec2 		vUV;
varying vec3 		vColor;
varying vec3		vEyePosition;
varying vec3		vWsNormal;
varying float		vHeight;

uniform samplerCube uRadianceMap;
uniform samplerCube uIrradianceMap;

uniform float		uRoughness;
uniform float		uRoughness4;
uniform float		uMetallic;
uniform float		uSpecular;

uniform float		uExposure;
uniform float		uGamma;
uniform float		uFogOffset;
uniform vec3		uFogColor;


const float PI = 3.141592657;
const float TwoPI = PI * 2.0;
#define FOG_DENSITY 0.05
float fogFactorExp2(const float dist, const float density) {
  const float LOG2 = -1.442695;
  float d = density * dist;
  float f = 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);

  return smoothstep(uFogOffset, 1.0, f);
}

#define saturate(x) clamp(x, 0.0, 1.0)


// Filmic tonemapping from
// http://filmicgames.com/archives/75

const float A = 0.15;
const float B = 0.50;
const float C = 0.10;
const float D = 0.20;
const float E = 0.02;
const float F = 0.30;

vec3 Uncharted2Tonemap( vec3 x )
{
	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;
}

// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )
{
	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );
	vec4 r = Roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;
	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;
	return SpecularColor * AB.x + AB.y;
}


// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/
vec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {
	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));
	float scale = 1.0 - exp2(lod) / cube_size;
	if (abs(v.x) != M) v.x *= scale;
	if (abs(v.y) != M) v.y *= scale;
	if (abs(v.z) != M) v.z *= scale;
	return v;
}

vec3 correctGamma(vec3 color, float g) {
	return pow(color, vec3(1.0/g));
}

vec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {
	vec3 diffuseColor	= baseColor - baseColor * metallic;
	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	

	vec3 color;
	float roughness4 = pow(roughness, 4.0);
	
	// sample the pre-filtered cubemap at the corresponding mipmap level
	float numMips		= 6.0;
	float mip			= numMips - 1.0 + log2(roughness);
	vec3 lookup			= -reflect( V, N );
	lookup				= fix_cube_lookup( lookup, 512.0, mip );
	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );
	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );
	
	// get the approximate reflectance
	float NoV			= saturate( dot( N, V ) );
	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );
	
	// combine the specular IBL and the BRDF
    vec3 diffuse  		= diffuseColor * irradiance;
    vec3 _specular 		= radiance * reflectance;
	color				= diffuse + _specular;

	return color;
}


void main(void) {
	// float d           = abs(vTextureCoord.x - .5) * 2.0;
	// const float range = 0.01;
	// float v           = 1.0 - vTextureCoord.y;
	// float a           = 1.0 - smoothstep(v-range, v+range, d);
	// if(a              <= 0.01) discard;

	float g 			= mix(vTextureCoord.y, 1.0, .25);

    vec3 N 				= normalize( vWsNormal );
	vec3 V 				= normalize( vEyePosition );
	
	vec3 color 			= getPbr(N, V, vColor, uRoughness, uMetallic, uSpecular) * g;

	// apply the tone-mapping
	color				= Uncharted2Tonemap( color * uExposure );
	// white balance
	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );
	
	// gamma correction
	color				= pow( color, vec3( 1.0 / uGamma ) );

	float fogDistance = gl_FragCoord.z / gl_FragCoord.w;
	float fogAmount   = fogFactorExp2(fogDistance, FOG_DENSITY);
	color.rgb         = mix(color.rgb, uFogColor, fogAmount);


	// output the fragment color
    gl_FragColor		= vec4( color, 1.0 );
    // gl_FragColor		= vec4( vec3(vHeight, 0.0, 0.0), 1.0 );
}