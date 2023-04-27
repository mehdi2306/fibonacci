"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/var _amdLoaderGlobal=this,_commonjsGlobal=typeof global=="object"?global:{},AMDLoader;(function(c){c.global=_amdLoaderGlobal;var E=function(){function _(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1,this._isElectronNodeIntegrationWebWorker=!1}return Object.defineProperty(_.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"isElectronNodeIntegrationWebWorker",{get:function(){return this._detect(),this._isElectronNodeIntegrationWebWorker},enumerable:!1,configurable:!0}),_.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=_._isWindows(),this._isNode=typeof module!="undefined"&&!!module.exports,this._isElectronRenderer=typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.electron!="undefined"&&process.type==="renderer",this._isWebWorker=typeof c.global.importScripts=="function",this._isElectronNodeIntegrationWebWorker=this._isWebWorker&&typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.electron!="undefined"&&process.type==="worker")},_._isWindows=function(){return typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0?!0:typeof process!="undefined"?process.platform==="win32":!1},_}();c.Environment=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function l(n,g,o){this.type=n,this.detail=g,this.timestamp=o}return l}();c.LoaderEvent=E;var _=function(){function l(n){this._events=[new E(1,"",n)]}return l.prototype.record=function(n,g){this._events.push(new E(n,g,c.Utilities.getHighPerformanceTimestamp()))},l.prototype.getEvents=function(){return this._events},l}();c.LoaderEventRecorder=_;var y=function(){function l(){}return l.prototype.record=function(n,g){},l.prototype.getEvents=function(){return[]},l.INSTANCE=new l,l}();c.NullLoaderEventRecorder=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function _(){}return _.fileUriToFilePath=function(y,l){if(l=decodeURI(l).replace(/%23/g,"#"),y){if(/^file:\/\/\//.test(l))return l.substr(8);if(/^file:\/\//.test(l))return l.substr(5)}else if(/^file:\/\//.test(l))return l.substr(7);return l},_.startsWith=function(y,l){return y.length>=l.length&&y.substr(0,l.length)===l},_.endsWith=function(y,l){return y.length>=l.length&&y.substr(y.length-l.length)===l},_.containsQueryString=function(y){return/^[^\#]*\?/gi.test(y)},_.isAbsolutePath=function(y){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(y)},_.forEachProperty=function(y,l){if(y){var n=void 0;for(n in y)y.hasOwnProperty(n)&&l(n,y[n])}},_.isEmpty=function(y){var l=!0;return _.forEachProperty(y,function(){l=!1}),l},_.recursiveClone=function(y){if(!y||typeof y!="object"||y instanceof RegExp||!Array.isArray(y)&&Object.getPrototypeOf(y)!==Object.prototype)return y;var l=Array.isArray(y)?[]:{};return _.forEachProperty(y,function(n,g){g&&typeof g=="object"?l[n]=_.recursiveClone(g):l[n]=g}),l},_.generateAnonymousModule=function(){return"===anonymous"+_.NEXT_ANONYMOUS_ID+++"==="},_.isAnonymousModule=function(y){return _.startsWith(y,"===anonymous")},_.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=c.global.performance&&typeof c.global.performance.now=="function"),this.HAS_PERFORMANCE_NOW?c.global.performance.now():Date.now()},_.NEXT_ANONYMOUS_ID=1,_.PERFORMANCE_NOW_PROBED=!1,_.HAS_PERFORMANCE_NOW=!1,_}();c.Utilities=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){function E(l){if(l instanceof Error)return l;var n=new Error(l.message||String(l)||"Unknown Error");return l.stack&&(n.stack=l.stack),n}c.ensureError=E;var _=function(){function l(){}return l.validateConfigurationOptions=function(n){function g(e){if(e.phase==="loading"){console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}if(e.phase==="factory"){console.error('The factory function of "'+e.moduleId+'" has thrown an exception'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}}if(n=n||{},typeof n.baseUrl!="string"&&(n.baseUrl=""),typeof n.isBuild!="boolean"&&(n.isBuild=!1),typeof n.buildForceInvokeFactory!="object"&&(n.buildForceInvokeFactory={}),typeof n.paths!="object"&&(n.paths={}),typeof n.config!="object"&&(n.config={}),typeof n.catchError=="undefined"&&(n.catchError=!1),typeof n.recordStats=="undefined"&&(n.recordStats=!1),typeof n.urlArgs!="string"&&(n.urlArgs=""),typeof n.onError!="function"&&(n.onError=g),Array.isArray(n.ignoreDuplicateModules)||(n.ignoreDuplicateModules=[]),n.baseUrl.length>0&&(c.Utilities.endsWith(n.baseUrl,"/")||(n.baseUrl+="/")),typeof n.cspNonce!="string"&&(n.cspNonce=""),typeof n.preferScriptTags=="undefined"&&(n.preferScriptTags=!1),Array.isArray(n.nodeModules)||(n.nodeModules=[]),n.nodeCachedData&&typeof n.nodeCachedData=="object"&&(typeof n.nodeCachedData.seed!="string"&&(n.nodeCachedData.seed="seed"),(typeof n.nodeCachedData.writeDelay!="number"||n.nodeCachedData.writeDelay<0)&&(n.nodeCachedData.writeDelay=1e3*7),!n.nodeCachedData.path||typeof n.nodeCachedData.path!="string")){var o=E(new Error("INVALID cached data configuration, 'path' MUST be set"));o.phase="configuration",n.onError(o),n.nodeCachedData=void 0}return n},l.mergeConfigurationOptions=function(n,g){n===void 0&&(n=null),g===void 0&&(g=null);var o=c.Utilities.recursiveClone(g||{});return c.Utilities.forEachProperty(n,function(e,t){e==="ignoreDuplicateModules"&&typeof o.ignoreDuplicateModules!="undefined"?o.ignoreDuplicateModules=o.ignoreDuplicateModules.concat(t):e==="paths"&&typeof o.paths!="undefined"?c.Utilities.forEachProperty(t,function(r,i){return o.paths[r]=i}):e==="config"&&typeof o.config!="undefined"?c.Utilities.forEachProperty(t,function(r,i){return o.config[r]=i}):o[e]=c.Utilities.recursiveClone(t)}),l.validateConfigurationOptions(o)},l}();c.ConfigurationOptionsUtil=_;var y=function(){function l(n,g){if(this._env=n,this.options=_.mergeConfigurationOptions(g),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),this.options.baseUrl===""){if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var o=this.options.nodeRequire.main.filename,e=Math.max(o.lastIndexOf("/"),o.lastIndexOf("\\"));this.options.baseUrl=o.substring(0,e+1)}if(this.options.nodeMain&&this._env.isNode){var o=this.options.nodeMain,e=Math.max(o.lastIndexOf("/"),o.lastIndexOf("\\"));this.options.baseUrl=o.substring(0,e+1)}}}return l.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var n=0;n<this.options.ignoreDuplicateModules.length;n++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[n]]=!0},l.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var n=0,g=this.options.nodeModules;n<g.length;n++){var o=g[n];this.nodeModulesMap[o]=!0}},l.prototype._createSortedPathsRules=function(){var n=this;this.sortedPathsRules=[],c.Utilities.forEachProperty(this.options.paths,function(g,o){Array.isArray(o)?n.sortedPathsRules.push({from:g,to:o}):n.sortedPathsRules.push({from:g,to:[o]})}),this.sortedPathsRules.sort(function(g,o){return o.from.length-g.from.length})},l.prototype.cloneAndMerge=function(n){return new l(this._env,_.mergeConfigurationOptions(n,this.options))},l.prototype.getOptionsLiteral=function(){return this.options},l.prototype._applyPaths=function(n){for(var g,o=0,e=this.sortedPathsRules.length;o<e;o++)if(g=this.sortedPathsRules[o],c.Utilities.startsWith(n,g.from)){for(var t=[],r=0,i=g.to.length;r<i;r++)t.push(g.to[r]+n.substr(g.from.length));return t}return[n]},l.prototype._addUrlArgsToUrl=function(n){return c.Utilities.containsQueryString(n)?n+"&"+this.options.urlArgs:n+"?"+this.options.urlArgs},l.prototype._addUrlArgsIfNecessaryToUrl=function(n){return this.options.urlArgs?this._addUrlArgsToUrl(n):n},l.prototype._addUrlArgsIfNecessaryToUrls=function(n){if(this.options.urlArgs)for(var g=0,o=n.length;g<o;g++)n[g]=this._addUrlArgsToUrl(n[g]);return n},l.prototype.moduleIdToPaths=function(n){if(this._env.isNode){var g=this.nodeModulesMap[n]===!0||this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(n);if(g)return this.isBuild()?["empty:"]:["node|"+n]}var o=n,e;if(!c.Utilities.endsWith(o,".js")&&!c.Utilities.isAbsolutePath(o)){e=this._applyPaths(o);for(var t=0,r=e.length;t<r;t++)this.isBuild()&&e[t]==="empty:"||(c.Utilities.isAbsolutePath(e[t])||(e[t]=this.options.baseUrl+e[t]),!c.Utilities.endsWith(e[t],".js")&&!c.Utilities.containsQueryString(e[t])&&(e[t]=e[t]+".js"))}else!c.Utilities.endsWith(o,".js")&&!c.Utilities.containsQueryString(o)&&(o=o+".js"),e=[o];return this._addUrlArgsIfNecessaryToUrls(e)},l.prototype.requireToUrl=function(n){var g=n;return c.Utilities.isAbsolutePath(g)||(g=this._applyPaths(g)[0],c.Utilities.isAbsolutePath(g)||(g=this.options.baseUrl+g)),this._addUrlArgsIfNecessaryToUrl(g)},l.prototype.isBuild=function(){return this.options.isBuild},l.prototype.shouldInvokeFactory=function(n){return this.options.isBuild?this.options.buildForceInvokeFactory[n]||c.Utilities.isAnonymousModule(n):!0},l.prototype.isDuplicateMessageIgnoredFor=function(n){return this.ignoreDuplicateModulesMap.hasOwnProperty(n)},l.prototype.getConfigForModule=function(n){if(this.options.config)return this.options.config[n]},l.prototype.shouldCatchError=function(){return this.options.catchError},l.prototype.shouldRecordStats=function(){return this.options.recordStats},l.prototype.onError=function(n){this.options.onError(n)},l}();c.Configuration=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function e(t){this._env=t,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(t,r,i,s){var u=this;if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new l;else if(this._env.isElectronRenderer){var a=t.getConfig().getOptionsLiteral().preferScriptTags;a?this._scriptLoader=new _:this._scriptLoader=new n(this._env)}else this._env.isNode?this._scriptLoader=new n(this._env):this._scriptLoader=new _;var f={callback:i,errorback:s};if(this._callbackMap.hasOwnProperty(r)){this._callbackMap[r].push(f);return}this._callbackMap[r]=[f],this._scriptLoader.load(t,r,function(){return u.triggerCallback(r)},function(d){return u.triggerErrorback(r,d)})},e.prototype.triggerCallback=function(t){var r=this._callbackMap[t];delete this._callbackMap[t];for(var i=0;i<r.length;i++)r[i].callback()},e.prototype.triggerErrorback=function(t,r){var i=this._callbackMap[t];delete this._callbackMap[t];for(var s=0;s<i.length;s++)i[s].errorback(r)},e}(),_=function(){function e(){}return e.prototype.attachListeners=function(t,r,i){var s=function(){t.removeEventListener("load",u),t.removeEventListener("error",a)},u=function(f){s(),r()},a=function(f){s(),i(f)};t.addEventListener("load",u),t.addEventListener("error",a)},e.prototype.load=function(t,r,i,s){if(/^node\|/.test(r)){var u=t.getConfig().getOptionsLiteral(),a=g(t.getRecorder(),u.nodeRequire||c.global.nodeRequire),f=r.split("|"),d=null;try{d=a(f[1])}catch(b){s(b);return}t.enqueueDefineAnonymousModule([],function(){return d}),i()}else{var p=document.createElement("script");p.setAttribute("async","async"),p.setAttribute("type","text/javascript"),this.attachListeners(p,i,s);var v=t.getConfig().getOptionsLiteral().trustedTypesPolicy;v&&(r=v.createScriptURL(r)),p.setAttribute("src",r);var h=t.getConfig().getOptionsLiteral().cspNonce;h&&p.setAttribute("nonce",h),document.getElementsByTagName("head")[0].appendChild(p)}},e}();function y(e){var t=e.getConfig().getOptionsLiteral().trustedTypesPolicy;try{var r=t?self.eval(t.createScript("","true")):new Function("true");return r.call(self),!0}catch{return!1}}var l=function(){function e(){this._cachedCanUseEval=null}return e.prototype._canUseEval=function(t){return this._cachedCanUseEval===null&&(this._cachedCanUseEval=y(t)),this._cachedCanUseEval},e.prototype.load=function(t,r,i,s){if(/^node\|/.test(r)){var u=t.getConfig().getOptionsLiteral(),a=g(t.getRecorder(),u.nodeRequire||c.global.nodeRequire),f=r.split("|"),d=null;try{d=a(f[1])}catch(h){s(h);return}t.enqueueDefineAnonymousModule([],function(){return d}),i()}else{var p=t.getConfig().getOptionsLiteral().trustedTypesPolicy,v=/^((http:)|(https:)|(file:))/.test(r)&&r.substring(0,self.origin.length)!==self.origin;if(!v&&this._canUseEval(t)){fetch(r).then(function(h){if(h.status!==200)throw new Error(h.statusText);return h.text()}).then(function(h){h=h+`
//# sourceURL=`+r;var b=p?self.eval(p.createScript("",h)):new Function(h);b.call(self),i()}).then(void 0,s);return}try{p&&(r=p.createScriptURL(r)),importScripts(r),i()}catch(h){s(h)}}},e}(),n=function(){function e(t){this._env=t,this._didInitialize=!1,this._didPatchNodeRequire=!1}return e.prototype._init=function(t){this._didInitialize||(this._didInitialize=!0,this._fs=t("fs"),this._vm=t("vm"),this._path=t("path"),this._crypto=t("crypto"))},e.prototype._initNodeRequire=function(t,r){var i=r.getConfig().getOptionsLiteral().nodeCachedData;if(!i||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;var s=this,u=t("module");function a(f){var d=f.constructor,p=function(h){try{return f.require(h)}finally{}};return p.resolve=function(h,b){return d._resolveFilename(h,f,!1,b)},p.resolve.paths=function(h){return d._resolveLookupPaths(h,f)},p.main=process.mainModule,p.extensions=d._extensions,p.cache=d._cache,p}u.prototype._compile=function(f,d){var p=u.wrap(f.replace(/^#!.*/,"")),v=r.getRecorder(),h=s._getCachedDataPath(i,d),b={filename:d},C;try{var R=s._fs.readFileSync(h);C=R.slice(0,16),b.cachedData=R.slice(16),v.record(60,h)}catch{v.record(61,h)}var m=new s._vm.Script(p,b),I=m.runInThisContext(b),U=s._path.dirname(d),w=a(this),O=[this.exports,w,this,d,U,process,_commonjsGlobal,Buffer],P=I.apply(this.exports,O);return s._handleCachedData(m,p,h,!b.cachedData,r),s._verifyCachedData(m,p,h,C,r),P}},e.prototype.load=function(t,r,i,s){var u=this,a=t.getConfig().getOptionsLiteral(),f=g(t.getRecorder(),a.nodeRequire||c.global.nodeRequire),d=a.nodeInstrumenter||function(I){return I};this._init(f),this._initNodeRequire(f,t);var p=t.getRecorder();if(/^node\|/.test(r)){var v=r.split("|"),h=null;try{h=f(v[1])}catch(I){s(I);return}t.enqueueDefineAnonymousModule([],function(){return h}),i()}else{r=c.Utilities.fileUriToFilePath(this._env.isWindows,r);var b=this._path.normalize(r),C=this._getElectronRendererScriptPathOrUri(b),R=Boolean(a.nodeCachedData),m=R?this._getCachedDataPath(a.nodeCachedData,r):void 0;this._readSourceAndCachedData(b,m,p,function(I,U,w,O){if(I){s(I);return}var P;U.charCodeAt(0)===e._BOM?P=e._PREFIX+U.substring(1)+e._SUFFIX:P=e._PREFIX+U+e._SUFFIX,P=d(P,b);var M={filename:C,cachedData:w},F=u._createAndEvalScript(t,P,M,i,s);u._handleCachedData(F,P,m,R&&!w,t),u._verifyCachedData(F,P,m,O,t)})}},e.prototype._createAndEvalScript=function(t,r,i,s,u){var a=t.getRecorder();a.record(31,i.filename);var f=new this._vm.Script(r,i),d=f.runInThisContext(i),p=t.getGlobalAMDDefineFunc(),v=!1,h=function(){return v=!0,p.apply(null,arguments)};return h.amd=p.amd,d.call(c.global,t.getGlobalAMDRequireFunc(),h,i.filename,this._path.dirname(i.filename)),a.record(32,i.filename),v?s():u(new Error("Didn't receive define call in "+i.filename+"!")),f},e.prototype._getElectronRendererScriptPathOrUri=function(t){if(!this._env.isElectronRenderer)return t;var r=t.match(/^([a-z])\:(.*)/i);return r?"file:///"+(r[1].toUpperCase()+":"+r[2]).replace(/\\/g,"/"):"file://"+t},e.prototype._getCachedDataPath=function(t,r){var i=this._crypto.createHash("md5").update(r,"utf8").update(t.seed,"utf8").update(process.arch,"").digest("hex"),s=this._path.basename(r).replace(/\.js$/,"");return this._path.join(t.path,s+"-"+i+".code")},e.prototype._handleCachedData=function(t,r,i,s,u){var a=this;t.cachedDataRejected?this._fs.unlink(i,function(f){u.getRecorder().record(62,i),a._createAndWriteCachedData(t,r,i,u),f&&u.getConfig().onError(f)}):s&&this._createAndWriteCachedData(t,r,i,u)},e.prototype._createAndWriteCachedData=function(t,r,i,s){var u=this,a=Math.ceil(s.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),f=-1,d=0,p=void 0,v=function(){setTimeout(function(){p||(p=u._crypto.createHash("md5").update(r,"utf8").digest());var h=t.createCachedData();if(!(h.length===0||h.length===f||d>=5)){if(h.length<f){v();return}f=h.length,u._fs.writeFile(i,Buffer.concat([p,h]),function(b){b&&s.getConfig().onError(b),s.getRecorder().record(63,i),v()})}},a*Math.pow(4,d++))};v()},e.prototype._readSourceAndCachedData=function(t,r,i,s){if(!r)this._fs.readFile(t,{encoding:"utf8"},s);else{var u=void 0,a=void 0,f=void 0,d=2,p=function(v){v?s(v):--d==0&&s(void 0,u,a,f)};this._fs.readFile(t,{encoding:"utf8"},function(v,h){u=h,p(v)}),this._fs.readFile(r,function(v,h){!v&&h&&h.length>0?(f=h.slice(0,16),a=h.slice(16),i.record(60,r)):i.record(61,r),p()})}},e.prototype._verifyCachedData=function(t,r,i,s,u){var a=this;!s||t.cachedDataRejected||setTimeout(function(){var f=a._crypto.createHash("md5").update(r,"utf8").digest();s.equals(f)||(u.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '"+i+"' now, but a RESTART IS REQUIRED")),a._fs.unlink(i,function(d){d&&u.getConfig().onError(d)}))},Math.ceil(5e3*(1+Math.random())))},e._BOM=65279,e._PREFIX="(function (require, define, __filename, __dirname) { ",e._SUFFIX=`
});`,e}();function g(e,t){if(t.__$__isRecorded)return t;var r=function(s){e.record(33,s);try{return t(s)}finally{e.record(34,s)}};return r.__$__isRecorded=!0,r}c.ensureRecordedNodeRequire=g;function o(e){return new E(e)}c.createScriptLoader=o})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function o(e){var t=e.lastIndexOf("/");t!==-1?this.fromModulePath=e.substr(0,t+1):this.fromModulePath=""}return o._normalizeModuleId=function(e){var t=e,r;for(r=/\/\.\//;r.test(t);)t=t.replace(r,"/");for(t=t.replace(/^\.\//g,""),r=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;r.test(t);)t=t.replace(r,"/");return t=t.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),t},o.prototype.resolveModule=function(e){var t=e;return c.Utilities.isAbsolutePath(t)||(c.Utilities.startsWith(t,"./")||c.Utilities.startsWith(t,"../"))&&(t=o._normalizeModuleId(this.fromModulePath+t)),t},o.ROOT=new o(""),o}();c.ModuleIdResolver=E;var _=function(){function o(e,t,r,i,s,u){this.id=e,this.strId=t,this.dependencies=r,this._callback=i,this._errorback=s,this.moduleIdResolver=u,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return o._safeInvokeFunction=function(e,t){try{return{returnedValue:e.apply(c.global,t),producedError:null}}catch(r){return{returnedValue:null,producedError:r}}},o._invokeFactory=function(e,t,r,i){return e.shouldInvokeFactory(t)?e.shouldCatchError()?this._safeInvokeFunction(r,i):{returnedValue:r.apply(c.global,i),producedError:null}:{returnedValue:null,producedError:null}},o.prototype.complete=function(e,t,r,i){this._isComplete=!0;var s=null;if(this._callback)if(typeof this._callback=="function"){e.record(21,this.strId);var u=o._invokeFactory(t,this.strId,this._callback,r);s=u.producedError,e.record(22,this.strId),!s&&typeof u.returnedValue!="undefined"&&(!this.exportsPassedIn||c.Utilities.isEmpty(this.exports))&&(this.exports=u.returnedValue)}else this.exports=this._callback;if(s){var a=c.ensureError(s);a.phase="factory",a.moduleId=this.strId,a.neededBy=i(this.id),this.error=a,t.onError(a)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},o.prototype.onDependencyError=function(e){return this._isComplete=!0,this.error=e,this._errorback?(this._errorback(e),!0):!1},o.prototype.isComplete=function(){return this._isComplete},o}();c.Module=_;var y=function(){function o(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return o.prototype.getMaxModuleId=function(){return this._nextId},o.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return typeof t=="undefined"&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},o.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},o}(),l=function(){function o(e){this.id=e}return o.EXPORTS=new o(0),o.MODULE=new o(1),o.REQUIRE=new o(2),o}();c.RegularDependency=l;var n=function(){function o(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}return o}();c.PluginDependency=n;var g=function(){function o(e,t,r,i,s){s===void 0&&(s=0),this._env=e,this._scriptLoader=t,this._loaderAvailableTimestamp=s,this._defineFunc=r,this._requireFunc=i,this._moduleIdProvider=new y,this._config=new c.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return o.prototype.reset=function(){return new o(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},o.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},o.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},o._findRelevantLocationInStack=function(e,t){for(var r=function(b){return b.replace(/\\/g,"/")},i=r(e),s=t.split(/\n/),u=0;u<s.length;u++){var a=s[u].match(/(.*):(\d+):(\d+)\)?$/);if(a){var f=a[1],d=a[2],p=a[3],v=Math.max(f.lastIndexOf(" ")+1,f.lastIndexOf("(")+1);if(f=f.substr(v),f=r(f),f===i){var h={line:parseInt(d,10),col:parseInt(p,10)};return h.line===1&&(h.col-="(function (require, define, __filename, __dirname) { ".length),h}}}throw new Error("Could not correlate define call site for needle "+e)},o.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,r=0,i=this._modules2.length;r<i;r++){var s=this._modules2[r];if(!!s){var u=this._buildInfoPath[s.id]||null,a=this._buildInfoDefineStack[s.id]||null,f=this._buildInfoDependencies[s.id];e[t++]={id:s.strId,path:u,defineLocation:u&&a?o._findRelevantLocationInStack(u,a):null,dependencies:f,shim:null,exports:s.exports}}}return e},o.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new c.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=c.NullLoaderEventRecorder.INSTANCE),this._recorder},o.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},o.prototype.enqueueDefineAnonymousModule=function(e,t){if(this._currentAnonymousDefineCall!==null)throw new Error("Can only have one anonymous define call per script file");var r=null;this._config.isBuild()&&(r=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:r,dependencies:e,callback:t}},o.prototype.defineModule=function(e,t,r,i,s,u){var a=this;u===void 0&&(u=new E(e));var f=this._moduleIdProvider.getModuleId(e);if(this._modules2[f]){this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");return}var d=new _(f,e,this._normalizeDependencies(t,u),r,i,u);this._modules2[f]=d,this._config.isBuild()&&(this._buildInfoDefineStack[f]=s,this._buildInfoDependencies[f]=(d.dependencies||[]).map(function(p){return a._moduleIdProvider.getStrModuleId(p.id)})),this._resolve(d)},o.prototype._normalizeDependency=function(e,t){if(e==="exports")return l.EXPORTS;if(e==="module")return l.MODULE;if(e==="require")return l.REQUIRE;var r=e.indexOf("!");if(r>=0){var i=t.resolveModule(e.substr(0,r)),s=t.resolveModule(e.substr(r+1)),u=this._moduleIdProvider.getModuleId(i+"!"+s),a=this._moduleIdProvider.getModuleId(i);return new n(u,a,s)}return new l(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},o.prototype._normalizeDependencies=function(e,t){for(var r=[],i=0,s=0,u=e.length;s<u;s++)r[i++]=this._normalizeDependency(e[s],t);return r},o.prototype._relativeRequire=function(e,t,r,i){if(typeof t=="string")return this.synchronousRequire(t,e);this.defineModule(c.Utilities.generateAnonymousModule(),t,r,i,null,e)},o.prototype.synchronousRequire=function(e,t){t===void 0&&(t=new E(e));var r=this._normalizeDependency(e,t),i=this._modules2[r.id];if(!i)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!i.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(i.error)throw i.error;return i.exports},o.prototype.configure=function(e,t){var r=this._config.shouldRecordStats();t?this._config=new c.Configuration(this._env,e):this._config=this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!r&&(this._recorder=null)},o.prototype.getConfig=function(){return this._config},o.prototype._onLoad=function(e){if(this._currentAnonymousDefineCall!==null){var t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},o.prototype._createLoadError=function(e,t){var r=this,i=this._moduleIdProvider.getStrModuleId(e),s=(this._inverseDependencies2[e]||[]).map(function(a){return r._moduleIdProvider.getStrModuleId(a)}),u=c.ensureError(t);return u.phase="loading",u.moduleId=i,u.neededBy=s,u},o.prototype._onLoadError=function(e,t){var r=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new _(e,this._moduleIdProvider.getStrModuleId(e),[],function(){},null,null));for(var i=[],s=0,u=this._moduleIdProvider.getMaxModuleId();s<u;s++)i[s]=!1;var a=!1,f=[];for(f.push(e),i[e]=!0;f.length>0;){var d=f.shift(),p=this._modules2[d];p&&(a=p.onDependencyError(r)||a);var v=this._inverseDependencies2[d];if(v)for(var s=0,u=v.length;s<u;s++){var h=v[s];i[h]||(f.push(h),i[h]=!0)}}a||this._config.onError(r)},o.prototype._hasDependencyPath=function(e,t){var r=this._modules2[e];if(!r)return!1;for(var i=[],s=0,u=this._moduleIdProvider.getMaxModuleId();s<u;s++)i[s]=!1;var a=[];for(a.push(r),i[e]=!0;a.length>0;){var f=a.shift(),d=f.dependencies;if(d)for(var s=0,u=d.length;s<u;s++){var p=d[s];if(p.id===t)return!0;var v=this._modules2[p.id];v&&!i[p.id]&&(i[p.id]=!0,a.push(v))}}return!1},o.prototype._findCyclePath=function(e,t,r){if(e===t||r===50)return[e];var i=this._modules2[e];if(!i)return null;var s=i.dependencies;if(s)for(var u=0,a=s.length;u<a;u++){var f=this._findCyclePath(s[u].id,t,r+1);if(f!==null)return f.push(e),f}return null},o.prototype._createRequire=function(e){var t=this,r=function(i,s,u){return t._relativeRequire(e,i,s,u)};return r.toUrl=function(i){return t._config.requireToUrl(e.resolveModule(i))},r.getStats=function(){return t.getLoaderEvents()},r.hasDependencyCycle=function(){return t._hasDependencyCycle},r.config=function(i,s){s===void 0&&(s=!1),t.configure(i,s)},r.__$__nodeRequire=c.global.nodeRequire,r},o.prototype._loadModule=function(e){var t=this;if(!(this._modules2[e]||this._knownModules2[e])){this._knownModules2[e]=!0;var r=this._moduleIdProvider.getStrModuleId(e),i=this._config.moduleIdToPaths(r),s=/^@[^\/]+\/[^\/]+$/;this._env.isNode&&(r.indexOf("/")===-1||s.test(r))&&i.push("node|"+r);var u=-1,a=function(f){if(u++,u>=i.length)t._onLoadError(e,f);else{var d=i[u],p=t.getRecorder();if(t._config.isBuild()&&d==="empty:"){t._buildInfoPath[e]=d,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),t._onLoad(e);return}p.record(10,d),t._scriptLoader.load(t,d,function(){t._config.isBuild()&&(t._buildInfoPath[e]=d),p.record(11,d),t._onLoad(e)},function(v){p.record(12,d),a(v)})}};a(null)}},o.prototype._loadPluginDependency=function(e,t){var r=this;if(!(this._modules2[t.id]||this._knownModules2[t.id])){this._knownModules2[t.id]=!0;var i=function(s){r.defineModule(r._moduleIdProvider.getStrModuleId(t.id),[],s,null,null)};i.error=function(s){r._config.onError(r._createLoadError(t.id,s))},e.load(t.pluginParam,this._createRequire(E.ROOT),i,this._config.getOptionsLiteral())}},o.prototype._resolve=function(e){var t=this,r=e.dependencies;if(r)for(var i=0,s=r.length;i<s;i++){var u=r[i];if(u===l.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(u===l.MODULE){e.unresolvedDependenciesCount--;continue}if(u===l.REQUIRE){e.unresolvedDependenciesCount--;continue}var a=this._modules2[u.id];if(a&&a.isComplete()){if(a.error){e.onDependencyError(a.error);return}e.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(u.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(u.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var f=this._findCyclePath(u.id,e.id,0)||[];f.reverse(),f.push(u.id),console.warn(f.map(function(v){return t._moduleIdProvider.getStrModuleId(v)}).join(` => 
`)),e.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[u.id]=this._inverseDependencies2[u.id]||[],this._inverseDependencies2[u.id].push(e.id),u instanceof n){var d=this._modules2[u.pluginId];if(d&&d.isComplete()){this._loadPluginDependency(d.exports,u);continue}var p=this._inversePluginDependencies2.get(u.pluginId);p||(p=[],this._inversePluginDependencies2.set(u.pluginId,p)),p.push(u),this._loadModule(u.pluginId);continue}this._loadModule(u.id)}e.unresolvedDependenciesCount===0&&this._onModuleComplete(e)},o.prototype._onModuleComplete=function(e){var t=this,r=this.getRecorder();if(!e.isComplete()){var i=e.dependencies,s=[];if(i)for(var u=0,a=i.length;u<a;u++){var f=i[u];if(f===l.EXPORTS){s[u]=e.exports;continue}if(f===l.MODULE){s[u]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};continue}if(f===l.REQUIRE){s[u]=this._createRequire(e.moduleIdResolver);continue}var d=this._modules2[f.id];if(d){s[u]=d.exports;continue}s[u]=null}var p=function(R){return(t._inverseDependencies2[R]||[]).map(function(m){return t._moduleIdProvider.getStrModuleId(m)})};e.complete(r,this._config,s,p);var v=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,v)for(var u=0,a=v.length;u<a;u++){var h=v[u],b=this._modules2[h];b.unresolvedDependenciesCount--,b.unresolvedDependenciesCount===0&&this._onModuleComplete(b)}var C=this._inversePluginDependencies2.get(e.id);if(C){this._inversePluginDependencies2.delete(e.id);for(var u=0,a=C.length;u<a;u++)this._loadPluginDependency(e.exports,C[u])}}},o}();c.ModuleManager=g})(AMDLoader||(AMDLoader={}));var define,AMDLoader;(function(c){var E=new c.Environment,_=null,y=function(o,e,t){typeof o!="string"&&(t=e,e=o,o=null),(typeof e!="object"||!Array.isArray(e))&&(t=e,e=null),e||(e=["require","exports","module"]),o?_.defineModule(o,e,t,null,null):_.enqueueDefineAnonymousModule(e,t)};y.amd={jQuery:!0};var l=function(o,e){e===void 0&&(e=!1),_.configure(o,e)},n=function(){if(arguments.length===1){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){l(arguments[0]);return}if(typeof arguments[0]=="string")return _.synchronousRequire(arguments[0])}if((arguments.length===2||arguments.length===3)&&Array.isArray(arguments[0])){_.defineModule(c.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw new Error("Unrecognized require call")};n.config=l,n.getConfig=function(){return _.getConfig().getOptionsLiteral()},n.reset=function(){_=_.reset()},n.getBuildInfo=function(){return _.getBuildInfo()},n.getStats=function(){return _.getLoaderEvents()},n.define=y;function g(){if(typeof c.global.require!="undefined"||typeof require!="undefined"){var o=c.global.require||require;if(typeof o=="function"&&typeof o.resolve=="function"){var e=c.ensureRecordedNodeRequire(_.getRecorder(),o);c.global.nodeRequire=e,n.nodeRequire=e,n.__$__nodeRequire=e}}E.isNode&&!E.isElectronRenderer&&!E.isElectronNodeIntegrationWebWorker?(module.exports=n,require=n):(E.isElectronRenderer||(c.global.define=y),c.global.require=n)}c.init=g,(typeof c.global.define!="function"||!c.global.define.amd)&&(_=new c.ModuleManager(E,c.createScriptLoader(E),y,n,c.Utilities.getHighPerformanceTimestamp()),typeof c.global.require!="undefined"&&typeof c.global.require!="function"&&n.config(c.global.require),define=function(){return y.apply(null,arguments)},define.amd=y.amd,typeof doNotInitLoader=="undefined"&&g())})(AMDLoader||(AMDLoader={})),define("vs/css",["require","exports"],function(c,E){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.load=void 0;function _(o,e,t,r){if(r=r||{},(r["vs/css"]||{}).disabled){t({});return}const s=e.toUrl(o+".css");y(o,s,()=>{t({})},u=>{typeof t.error=="function"&&t.error("Could not find "+s+".")})}E.load=_;function y(o,e,t,r){if(l(o,e)){t();return}n(o,e,t,r)}function l(o,e){const t=document.getElementsByTagName("link");for(let r=0,i=t.length;r<i;r++){const s=t[r].getAttribute("data-name"),u=t[r].getAttribute("href");if(s===o||u===e)return!0}return!1}function n(o,e,t,r){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("data-name",o),g(o,i,t,r),i.setAttribute("href",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}function g(o,e,t,r){const i=()=>{e.removeEventListener("load",s),e.removeEventListener("error",u)},s=a=>{i(),t()},u=a=>{i(),r(a)};e.addEventListener("load",s),e.addEventListener("error",u)}}),define("vs/nls",["require","exports"],function(c,E){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.load=E.create=E.setPseudoTranslation=E.getConfiguredDefaultLocale=E.localize=void 0;let _=typeof document!="undefined"&&document.location&&document.location.hash.indexOf("pseudo=true")>=0;const y="i-default";function l(a,f){let d;return f.length===0?d=a:d=a.replace(/\{(\d+)\}/g,(p,v)=>{const h=v[0],b=f[h];let C=p;return typeof b=="string"?C=b:(typeof b=="number"||typeof b=="boolean"||b===void 0||b===null)&&(C=String(b)),C}),_&&(d="\uFF3B"+d.replace(/[aouei]/g,"$&$&")+"\uFF3D"),d}function n(a,f){let d=a[f];return d||(d=a["*"],d)?d:null}function g(a){return a.charAt(a.length-1)==="/"?a:a+"/"}async function o(a,f,d){const p=g(a)+g(f)+"vscode/"+g(d),v=await fetch(p);if(v.ok)return await v.json();throw new Error(`${v.status} - ${v.statusText}`)}function e(a){return function(f,d){const p=Array.prototype.slice.call(arguments,2);return l(a[f],p)}}function t(a,f,...d){return l(f,d)}E.localize=t;function r(a){}E.getConfiguredDefaultLocale=r;function i(a){_=a}E.setPseudoTranslation=i;function s(a,f){return{localize:e(f[a]),getConfiguredDefaultLocale:f.getConfiguredDefaultLocale??(d=>{})}}E.create=s;function u(a,f,d,p){const v=p["vs/nls"]??{};if(!a||a.length===0)return d({localize:t,getConfiguredDefaultLocale:()=>v.availableLanguages?.["*"]});const h=v.availableLanguages?n(v.availableLanguages,a):null,b=h===null||h===y;let C=".nls";b||(C=C+"."+h);const R=m=>{Array.isArray(m)?m.localize=e(m):m.localize=e(m[a]),m.getConfiguredDefaultLocale=()=>v.availableLanguages?.["*"],d(m)};typeof v.loadBundle=="function"?v.loadBundle(a,h,(m,I)=>{m?f([a+".nls"],R):R(I)}):v.translationServiceUrl&&!b?(async()=>{try{const m=await o(v.translationServiceUrl,h,a);return R(m)}catch(m){if(!h.includes("-"))return console.error(m),f([a+".nls"],R);try{const I=h.split("-")[0],U=await o(v.translationServiceUrl,I,a);return v.availableLanguages??(v.availableLanguages={}),v.availableLanguages["*"]=I,R(U)}catch(I){return console.error(I),f([a+".nls"],R)}}})():f([a+C],R,m=>{if(C===".nls"){console.error("Failed trying to load default language strings",m);return}console.error(`Failed to load message bundle for language ${h}. Falling back to the default language:`,m),f([a+".nls"],R)})}E.load=u});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/74b1f979648cc44d385a2286793c226e611f59e7/core/vs/loader.js.map
