"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpack = void 0;
const helper_1 = require("../helper");
exports.webpack = [
    ...(0, helper_1.expandPatterns)("webpack.{js,cjs,ts,coffee}"),
    ...(0, helper_1.expandPatterns)("webpack.{base,config,common,dev,main,development,mix,prod,production,server,client,test,dist,plugins,renderer,rules}.{js,cjs,ts,coffee}"),
    ...(0, helper_1.expandPatterns)("webpack.config.{common,dev,main,server,client,prod,production,staging,base,test,vendor,babel,images}.{js,cjs,ts,coffee}"),
    ...(0, helper_1.expandPatterns)("webpack.config.{common,dev,main,server,client,prodproduction,staging,base,test,vendor}.babel.{js,cjs,ts,coffee}"),
    ...(0, helper_1.expandPatterns)("webpack.config.vendor.production.{js,cjs,ts,coffee}"),
    ...(0, helper_1.expandPatterns)("webpack.prod.{config,conf}.{js,cjs,ts,coffee}"),
    ...(0, helper_1.expandPatterns)("webpackfile.{js,cjs,ts,coffee}"),
];
