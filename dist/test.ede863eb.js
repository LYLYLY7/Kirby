const string = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::before,
*::after {
  box-sizing: border-box;
}
.back {
  position: relative;
  z-index: -1;
  top: 100px;
  min-height: 50vh;
}
.back .physical {
  left: 50%;
  margin-left: -100px;
  position: absolute;
  border: 3px solid #782838;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #eda8b6;
}
.eyes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100px;
  position: relative;
  top: 14px;
  left: 50%;
  margin-left: -54px;
  transform-origin: center;
  transform: rotate(-10deg);
}
.eyes .eye-left {
  width: 50px;
  height: 25px;
  border-radius: 50%/50%;
  transform-origin: center;
  background-color: #782838;
  transform: rotate(90deg);
  display: flex;
  align-items: center;
}
.eyes .eye-right {
  width: 50px;
  height: 25px;
  border-radius: 50%/50%;
  transform: rotate(90deg);
  transform-origin: center;
  background-color: #782838;
  transform: rotate(85deg);
  display: flex;
  align-items: center;
}
.eyes .eye-left .pupil1 {
  width: 20px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  left: 5px;
  background-color: #ffffff;
}
.eyes .eye-left .blue1 {
  width: 14px;
  height: 14px;
  background-color: #6e9dea;
  border-radius: 50%;
  position: relative;
  left: 12px;
}
.eyes .eye-right .pupil2 {
  width: 20px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  left: 5px;
  background-color: #ffffff;
}
.eyes .eye-right .blue2 {
  width: 14px;
  height: 14px;
  background-color: #6e9dea;
  border-radius: 50%;
  position: relative;
  left: 12px;
}
.physical .pink1 {
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #782838;
  border-radius: 50%;
  left: 18px;
  top: 50px;
}
.physical .pink2 {
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #782838;
  border-radius: 50%;
  left: 68px;
  top: 50px;
}
.faces {
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 124px;
  left: 50%;
  position: relative;
  margin-left: -62px;
  margin-top: -18px;
  transform-origin: center;
  transform: rotate(-10deg);
}
.faces .face1 {
  width: 24px;
  height: 14px;
  border-radius: 50%;
  background-color: #ea6e7e;
  transform-origin: center;
  transform: rotate(0deg);
}
.faces .face2 {
  width: 24px;
  height: 14px;
  border-radius: 50%;
  background-color: #ea6e7e;
  transform-origin: center;
  transform: rotate(0deg);
}

.back .left-arm {
  left: 50%;
  top: 80px;
  margin-left: -140px;
  position: absolute;
  border: 3px solid #782838;
  width: 100px;
  height: 86px;
  border-radius: 50%;
  background-color: #eda8b6;
  z-index: -1;
}
.back .right-arm {
  left: 50%;
  top: -36px;
  margin-left: 10px;
  position: absolute;
  border: 3px solid #782838;
  width: 100px;
  height: 86px;
  border-radius: 50%;
  background-color: #eda8b6;
  transform: rotate(90deg);
  z-index: -1;
}
.back .left-foot {
  left: 50%;
  top: 126px;
  margin-left: -120px;
  position: absolute;
  border: 3px solid #782838;
  width: 120px;
  height: 86px;
  border-radius: 50%;
  background-color: #dd4545;
  transform: rotate(45deg);
}
.back .right-foot {
  left: 50%;
  top: 130px;
  position: absolute;
  border: 3px solid #782838;
  width: 120px;
  height: 86px;
  border-radius: 50%;
  background-color: #dd4545;
  transform: rotate(70deg);
  z-index: -1;
}
.back .hidden1 {
  border: 1px solid #eda8b6;
  top: 4px;
  left: 50%;
  margin-left: 12px;
  position: relative;
  width: 70px;
  height: 40px;
  border-radius: 50%;
  transform: rotate(30deg);
  transform-origin: center;
  background-color: #eda8b6;
}
.back .hidden2 {
  border: 1px solid #eda8b6;
  width: 20px;
  height: 30px;
  top: 52px;
  left: 50%;
  margin-left: -110px;
  position: relative;
  border-radius: 50%;
  transform-origin: end;
  transform: rotate(-10deg);
  background-color: #eda8b6;
}
.back .mouth {
  width: 60px;
  height: 30px;
  left: 50%;
  top: -30px;
  position: relative;
  margin-left: -26px;
  border-radius: 50%;
  transform: rotate(-10deg);
  overflow: hidden;
}
.back .mouth .mouth1 {
  border: 3px solid #782838;
  width: 40px;
  height: 60px;
  left: 50%;
  position: relative;
  margin-left: -20px;
  top: -35px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}
.back .mouth .mouth1 .mouth2 {
  border: 3px solid #782838;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 33px;
  margin-left: -100px;
  position: absolute;
  border-radius: 50%;
  background-color: #782838;
}
.back .mouth .mouth1 .tongue {
  width: 20px;
  height: 14px;
  left: 50%;
  margin-left: -10px;
  bottom: -40px;
  position: relative;
  border-radius: 50%;
  background-color: #dd4545;
  z-index: 1;
}
`;
let n = 1;
// substring 子字符串（起始，末尾）
demo.innerHTML = string.substring(0, n);
demo2.innerText = string.substring(0, n);
console.log(n);
let run = ()=>{
    n += 1;
    if (n > string.length) {
        // 清除setInterval
        window.clearInterval(id);
        // 如果符合条件，就不执行下面两个语句
        return;
    }
    console.log(n + ":" + string.substring(0, n));
    demo.innerHTML = string.substring(0, n);
    demo2.innerText = string.substring(0, n);
    demo2.scrollTop = demo2.scrollHeight;
};
let time = 0;
const play = ()=>{
    setInterval(()=>{
        run();
    }, time);
};
const pause = ()=>{
    window.clearInterval(id);
};
let id = play();
btnPause.onclick = ()=>{
    pause();
};
btnPlay.onclick = ()=>{
    id = play();
};
btnSlow.onclick = ()=>{
    pause();
    time = 500;
    // run是一个函数，run()则是run的返回值
    id = setInterval(run, time);
};
btnNormal.onclick = ()=>{
    pause();
    time = 100;
    id = setInterval(run, time);
};
btnFast.onclick = ()=>{
    pause();
    time = 0;
    id = setInterval(run, time);
};

//# sourceMappingURL=test.ede863eb.js.map
