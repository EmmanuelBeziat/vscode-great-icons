import { expandPatterns } from "../helper";

export const webpack: string[] = [
	...expandPatterns("webpack.{js,cjs,ts,coffee}"),
	...expandPatterns("webpack.{base,config,common,dev,main,development,mix,prod,production,server,client,test,dist,plugins,renderer,rules}.{js,cjs,ts,coffee}"),
	...expandPatterns("webpack.config.{common,dev,main,server,client,prod,production,staging,base,test,vendor,babel,images}.{js,cjs,ts,coffee}"),
	...expandPatterns("webpack.config.{common,dev,main,server,client,prodproduction,staging,base,test,vendor}.babel.{js,cjs,ts,coffee}"),
	...expandPatterns("webpack.config.vendor.production.{js,cjs,ts,coffee}"),
	...expandPatterns("webpack.prod.{config,conf}.{js,cjs,ts,coffee}"),
	...expandPatterns("webpackfile.{js,cjs,ts,coffee}"),
];
