/**
 * Created by Stone on 2017/3/29.
 */
/**
*data:2017/03/29
* author:stone
* email:xingyanglong@163.com
 * plugin usage:this plugin is easy for you to quickly display images with effects as carousel.enjoy it!
 */
/**
 *All this four arguments are must.
 * @param target :the location or container we display the picture,create one empty image position in html using img tag
 * @param img : array includes all the images src info.
 * @param duration : set the duration time as ms;
 * @param effect : set the picture faded effect, (explode,fold,blind,bounce,clip,drop,puff,shake,fade,pulsate) ten choices are available.the default is explode.
 */
$.carousel = function(target,img,duration,effect){
    var idx = 0;
    if($.type(img) !== "array" || img === null){
        alert("Warning: img array cannot be null!");
        return;
    }else if(!effect){
        effect = "explode";
    }else if(!duration || $.type(duration) !== "number" || duration <= 0){
        alert("Duration shall be positive integer!");
        return;
    }
    setInterval(function(){
        idx++;
        if (idx > img.length - 1) {
            idx = 0;
        }
        $(target).effect(effect,"easing",1000,function(){
            $(target).attr("src", img[idx]).show("slide");
        });
    },duration);
};