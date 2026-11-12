import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../src/App';
import {getAllIndexableRoutes} from '../src/config/indexableRoutes';
const root = path.resolve('dist');
const template = fs.readFileSync(path.join(root,'index.html'),'utf8');
const routes=getAllIndexableRoutes();
for (const route of [...routes, {path:'/404'}]) {
 const context:any={};
 let content=renderToString(React.createElement(App,{initialPath:route.path,helmetContext:context}));
 const metadata:string[]=[];
 content=content.replace(/<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, tag=>{metadata.push(tag.replace(/^<(title|meta|link|script)\b/i,'<$1 data-prerender-seo="true"'));return '';});
 const head=metadata.join('\n');
 let html=template.replace(/<title>[\s\S]*?<\/title>/gi,'').replace(/<meta\s+name="description"[^>]*>/gi,'').replace(/<link\s+rel="canonical"[^>]*>/gi,'');
 html=html.replace('</head>',head+'\n</head>').replace('<div id="root"></div>',`<div id="root">${content}</div>`);
 const output=route.path==='/404'?path.join(root,'404.html'):path.join(root,route.path,'index.html');
 fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,html);
}
console.log(`Rendered actual React content for ${routes.length} pages and 404.`);
