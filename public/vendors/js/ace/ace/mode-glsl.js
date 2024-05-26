ace.define("ace/mode/glsl",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/tokenizer","ace/mode/glsl_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){var r=e("../lib/oop"),o=e("./c_cpp").Mode,i=e("../tokenizer").Tokenizer,a=e("./glsl_highlight_rules").glslHighlightRules,l=e("./matching_brace_outdent").MatchingBraceOutdent,s=(e("../range").Range,e("./behaviour/cstyle").CstyleBehaviour),c=e("./folding/cstyle").FoldMode,u=function(){this.$tokenizer=new i((new a).getRules()),this.$outdent=new l,this.$behaviour=new s,this.foldingRules=new c};r.inherits(u,o),t.Mode=u})),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text").Mode,i=e("../tokenizer").Tokenizer,a=e("./c_cpp_highlight_rules").c_cppHighlightRules,l=e("./matching_brace_outdent").MatchingBraceOutdent,s=e("../range").Range,c=e("./behaviour/cstyle").CstyleBehaviour,u=e("./folding/cstyle").FoldMode,g=function(){this.$tokenizer=new i((new a).getRules()),this.$outdent=new l,this.$behaviour=new c,this.foldingRules=new u};r.inherits(g,o),function(){this.toggleCommentLines=function(e,t,n,r){for(var o=!0,i=/^(\s*)\/\//,a=n;a<=r;a++)if(!i.test(t.getLine(a))){o=!1;break}if(o){var l=new s(0,0,0,0);for(a=n;a<=r;a++){var c=t.getLine(a).match(i);l.start.row=a,l.end.row=a,l.end.column=c[0].length,t.replace(l,c[1])}}else t.indentRows(n,r,"//")},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.$tokenizer.getLineTokens(t,e),i=o.tokens,a=o.state;if(i.length&&"comment"==i[i.length-1].type)return r;if("start"==e)(l=t.match(/^.*[\{\(\[]\s*$/))&&(r+=n);else if("doc-start"==e){if("start"==a)return"";var l;(l=t.match(/^\s*(\/?)\*/))&&(l[1]&&(r+=" "),r+="* ")}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)}}.call(g.prototype),t.Mode=g})),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,i=e("./text_highlight_rules").TextHighlightRules,a=t.cFunctions="\\s*\\bhypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len)))\\b",l=function(){var e=this.$keywords=this.createKeywordMapper({"keyword.control":"break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using","storage.type":"asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template","storage.modifier":"const|extern|register|restrict|static|volatile|inline|private:|protected:|public:|friend|explicit|virtual|export|mutable|typename","keyword.operator":"and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eqconst_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace","variable.language":"this","constant.language":"NULL|true|false|TRUE|FALSE"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"keyword",regex:"(?:#include|#import|#pragma|#line|#define|#undef|#if|#ifdef|#else|#elif|#ifndef)\\b",next:"directive"},{token:"keyword",regex:"(?:#endif)\\b"},{token:"support.function.C99.c",regex:a},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};r.inherits(l,i),t.c_cppHighlightRules=l})),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc",regex:"\\s+"},{token:"comment.doc",regex:"TODO"},{token:"comment.doc",regex:"[^@\\*]+"},{token:"comment.doc",regex:"."}]}};r.inherits(i,o),i.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,i=e.findMatchingBracket({row:t,column:o});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new r(t,0,t,o-1),a)},this.$getIndent=function(e){var t=e.match(/^(\s+)/);return t?t[1]:""}}).call(o.prototype),t.MatchingBraceOutdent=o})),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,n){var r=e("../../lib/oop"),o=e("../behaviour").Behaviour,i=e("../../token_iterator").TokenIterator,a=e("../../lib/lang"),l=["text","paren.rparen","punctuation.operator"],s=["text","paren.rparen","punctuation.operator","comment"],c=0,u=-1,g="",f=0,d=-1,m="",h="",p=function(){p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new i(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",l)){var o=new i(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",l))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",s)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),o=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,o,g[0])||(c=0),u=r.row,g=n+o.substr(r.column),c++},p.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),o=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,o)||(f=0),d=r.row,m=o.substr(0,r.column)+n,h=o.substr(r.column),f++},p.isAutoInsertedClosing=function(e,t,n){return c>0&&e.row===u&&n===g[0]&&t.substr(e.column)===g},p.isMaybeInsertedClosing=function(e,t){return f>0&&e.row===d&&t.substr(e.column)===h&&t.substr(0,e.column)==m},p.popAutoInsertedClosing=function(){g=g.substr(1),c--},p.clearMaybeInsertedClosing=function(){f=0,d=-1},this.add("braces","insertion",(function(e,t,n,r,o){var i=n.getCursorPosition(),l=r.doc.getLine(i.row);if("{"==o){var s=n.getSelectionRange(),c=r.doc.getTextRange(s);if(""!==c&&"{"!==c&&n.getWrapBehavioursEnabled())return{text:"{"+c+"}",selection:!1};if(p.isSaneInsertion(n,r))return/[\]\}\)]/.test(l[i.column])?(p.recordAutoInsert(n,r,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(n,r,"{"),{text:"{",selection:[1,1]})}else if("}"==o){if("}"==l.substring(i.column,i.column+1))if(null!==r.$findOpeningBracket("}",{column:i.column+1,row:i.row})&&p.isAutoInsertedClosing(i,l,o))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}else if("\n"==o||"\r\n"==o){var u="";if(p.isMaybeInsertedClosing(i,l)&&(u=a.stringRepeat("}",f),p.clearMaybeInsertedClosing()),"}"==l.substring(i.column,i.column+1)||""!==u){if(!r.findMatchingBracket({row:i.row,column:i.column},"}"))return null;var g=this.getNextLineIndent(e,l.substring(0,i.column),r.getTabString());return{text:"\n"+g+"\n"+this.$getIndent(l)+u,selection:[1,g.length,1,g.length]}}}})),this.add("braces","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"{"==i){if("}"==r.doc.getLine(o.start.row).substring(o.end.column,o.end.column+1))return o.end.column++,o;f--}})),this.add("parens","insertion",(function(e,t,n,r,o){if("("==o){var i=n.getSelectionRange(),a=r.doc.getTextRange(i);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"("+a+")",selection:!1};if(p.isSaneInsertion(n,r))return p.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(")"==o){var l=n.getCursorPosition(),s=r.doc.getLine(l.row);if(")"==s.substring(l.column,l.column+1))if(null!==r.$findOpeningBracket(")",{column:l.column+1,row:l.row})&&p.isAutoInsertedClosing(l,s,o))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("parens","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"("==i&&")"==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2))return o.end.column++,o})),this.add("brackets","insertion",(function(e,t,n,r,o){if("["==o){var i=n.getSelectionRange(),a=r.doc.getTextRange(i);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"["+a+"]",selection:!1};if(p.isSaneInsertion(n,r))return p.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){var l=n.getCursorPosition(),s=r.doc.getLine(l.row);if("]"==s.substring(l.column,l.column+1))if(null!==r.$findOpeningBracket("]",{column:l.column+1,row:l.row})&&p.isAutoInsertedClosing(l,s,o))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("brackets","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"["==i&&"]"==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2))return o.end.column++,o})),this.add("string_dquotes","insertion",(function(e,t,n,r,o){if('"'==o||"'"==o){var i=o,a=n.getSelectionRange(),l=r.doc.getTextRange(a);if(""!==l&&"'"!==l&&'"'!=l&&n.getWrapBehavioursEnabled())return{text:i+l+i,selection:!1};var s=n.getCursorPosition(),c=r.doc.getLine(s.row);if("\\"==c.substring(s.column-1,s.column))return null;for(var u,g=r.getTokens(a.start.row),f=0,d=-1,m=0;m<g.length&&("string"==(u=g[m]).type?d=-1:d<0&&(d=u.value.indexOf(i)),!(u.value.length+f>a.start.column));m++)f+=g[m].value.length;if(!u||d<0&&"comment"!==u.type&&("string"!==u.type||a.start.column!==u.value.length+f-1&&u.value.lastIndexOf(i)===u.value.length-1)){if(!p.isSaneInsertion(n,r))return;return{text:i+i,selection:[1,1]}}if(u&&"string"===u.type)if(c.substring(s.column,s.column+1)==i)return{text:"",selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==i||"'"==i)&&'"'==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2))return o.end.column++,o}))};r.inherits(p,o),t.CstyleBehaviour=p})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){var r=e("../../lib/oop"),o=(e("../../range").Range,e("./fold_mode").FoldMode),i=t.FoldMode=function(){};r.inherits(i,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var r,o=e.getLine(n);if(r=o.match(this.foldingStartMarker)){var i=r.index;return r[1]?this.openingBracketBlock(e,r[1],n,i):e.getCommentFoldRange(n,i+r[0].length,1)}if("markbeginend"===t&&(r=o.match(this.foldingStopMarker))){i=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,i):e.getCommentFoldRange(n,i,-1)}}}.call(i.prototype)})),ace.define("ace/mode/glsl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/c_cpp_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./c_cpp_highlight_rules").c_cppHighlightRules,i=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"attribute|const|uniform|varying|break|continue|do|for|while|if|else|in|out|inout|float|int|void|bool|true|false|lowp|mediump|highp|precision|invariant|discard|return|mat2|mat3|mat4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|sampler2D|samplerCube|struct","constant.language":"radians|degrees|sin|cos|tan|asin|acos|atan|pow|exp|log|exp2|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|faceforward|reflect|refract|matrixCompMult|lessThan|lessThanEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|dFdx|dFdy|fwidth|texture2D|texture2DProj|texture2DLod|texture2DProjLod|textureCube|textureCubeLod|gl_MaxVertexAttribs|gl_MaxVertexUniformVectors|gl_MaxVaryingVectors|gl_MaxVertexTextureImageUnits|gl_MaxCombinedTextureImageUnits|gl_MaxTextureImageUnits|gl_MaxFragmentUniformVectors|gl_MaxDrawBuffers|gl_DepthRangeParameters|gl_DepthRange|gl_Position|gl_PointSize|gl_FragCoord|gl_FrontFacing|gl_PointCoord|gl_FragColor|gl_FragData"},"identifier");this.$rules=(new o).$rules,this.$rules.start.forEach((function(t){"function"==typeof t.token&&(t.token=e)}))};r.inherits(i,o),t.glslHighlightRules=i}));
