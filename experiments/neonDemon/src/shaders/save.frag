// save.frag

#extension GL_EXT_draw_buffers : require 
precision highp float;

varying vec3 vColor;
varying vec4 vPointColor;
varying vec3 vExtra;

void main(void) {
    gl_FragData[0] = vec4(vColor, 1.0);
    gl_FragData[1] = vec4((vExtra * 2.0 - 1.0) * 0.01, 1.0);
    gl_FragData[2] = vec4(vExtra, 1.0);
    gl_FragData[3] = vPointColor;
}