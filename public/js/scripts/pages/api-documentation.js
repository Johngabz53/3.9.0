$(document).ready((function(){let t=$(".features_description .title");t.hide(),$("#contacts-api-div").show(),$("#features li").click((function(i){var e;i.preventDefault(),e=this.id+"-div",t.each((function(){this!==e&&$(this).hide()})),$("#"+e).toggle()}))}));
