﻿function ocultarBotones(){$("div.cr-content-container").size()<6&&($("span.previous").hide(),$("span.next").hide())}function carrusel(a){$("#cr-container").crotator({autoplay:a,openThumbs:!0,slideshow_interval:5000,toggleThumbsSpeed:300})}function ocultarUnicoBoton(){$("div.cr-content-container").size()==1&&$("div.cr-thumbs").hide()}function ordenarImagenes(){var H,F,q=[],I=[],E=[],C=[],g=[],G,D,d,x,k,A,j,m,z,B;if(x=0,d=0,contadorUltimasOrdenadas=0,k=1,H=$.cookie("TLBS_Carrusel"),H!=null&&(F=H.split("&"),F.length>0)){if($(".cr-content-container").each(function(a){q[a]=$(this).attr("name")}),q.length>1){for(D=0;D<q.length;D++){for(existe=!1,b=0;b<F.length;b++){q[D]==F[b]&&(existe=!0)}existe||(E[x]=q[D],x++)}for(C=E.concat(F),G=0;G<C.length;G++){$("#"+C[G]).length&&(j=typeof j=="undefined"?"<div class='cr-content-container' id='content-"+k+"' name='"+C[G]+"' style='display:block;'>"+$("#"+C[G]).html()+"</div>":j+"<div class='cr-content-container' id='content-"+k+"' name='"+C[G]+"'>"+$("#"+C[G]).html()+"</div>",k++)}}$(".cr-content-wrapper").html(j)}}$(document).ready(function(){var c,a;ordenarImagenes(),ocultarUnicoBoton(),c=!0,carrusel(!0),a=1,$.browser = {chrome:navigator.userAgent.toLowerCase().indexOf('chrome') > -1},$(".cr-content-container a.enlace").click(function(){var e=$.cookie("TLBS_Carrusel"),d="";d=$(this).parents("div.cr-content-container").attr("name"),e==null||e==""?$.cookie("TLBS_Carrusel",d):e.indexOf(d)==-1?e.charAt(e.length-1)=="&"?$.cookie("TLBS_Carrusel",$.cookie("TLBS_Carrusel")+d):$.cookie("TLBS_Carrusel",$.cookie("TLBS_Carrusel")+"&"+d):e.indexOf(d+"&")!=-1&&$.cookie("TLBS_Carrusel",$.cookie("TLBS_Carrusel").replace(d+"&","")+"&"+d)}),ocultarBotones()});