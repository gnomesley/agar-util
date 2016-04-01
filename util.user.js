// ==UserScript==
// @name        Agar Util
// @version     0.1
// @namespace   http://gnomesley.com
// @updateURL   https://github.com/gnomesley/agar-util/raw/master/util.user.js
// @require     https://github.com/xzfc/agar-expose/raw/master/expose.user.js
// @include     http://agar.io/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

var ejectInterval = null;

window.onload = function ()
{
    window.agar.minScale = -30;
    window.addEventListener("keydown", function (event)
    {
        if (event.keyCode === 81 && !ejectInterval)
        {
            ejectInterval = setInterval(function ()
            {
                window.onkeydown({keyCode: 87});
                window.onkeyup({keyCode: 87});
            }, 50);
        }
    });
    window.addEventListener("keyup", function (event)
    {
        if (event.keyCode === 81)
        {
            clearInterval(ejectInterval);
            ejectInterval = null;
        }
    });
};