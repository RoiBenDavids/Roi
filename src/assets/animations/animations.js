import gsap from "gsap/gsap-core"
import { Timeline } from "gsap/gsap-core"
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin)
function play (pathname, node, appears) {
    const delay = appears ? 0 : 0.5
    let timeline
    
    if (pathname === '/')
    {
        timeline = getHomeTimeline(node, delay)
    }
    else
    {
          timeline = getHomeTimeline(node, delay)
    }
    timeline.play()
}

const getHomeTimeline = (node, delay) => {
    const timeline = gsap.timeline({ paused: true ,repeat:2})
    const texts = node.querySelectorAll('div');

    timeline
      .to(texts,{duration: 1, height: 0, opacity: 0.5,backgroundColor:'blue'})

    return timeline
  }

export const anim = {
    onEnter,
    play
}

function onEnter(node) {
    gsap.from('div',{y:30,opacity:0})
    
}