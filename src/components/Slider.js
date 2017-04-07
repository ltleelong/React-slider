/**
 * Created by ltleelong on 2017/4/7.
 */
import React from 'react';
import $ from 'jquery';
require('./slider.css');
export default class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state={pos:0}
    }
    go(step){
        let pos = this.state.pos+step;
        if(pos==this.props.images.length+1){
            this.sliders.css('left',0);
            pos=1
        }
        if(pos==-1){
            pos = this.props.images.length-1;
        }
        this.setState({pos});
        this.sliders.animate({left:pos*-1000},1000)
    }
    play(){
        this.$timer = setInterval(()=>{
            this.go(1)
        },this.props.delay*1000)
    }
    componentDidMount(){
        this.sliders = $('.sliders');
        if(this.props.autoPlay){
            this.play()
        }
    }
    render(){
        let len= this.props.images.length;
        let style={
            width:(len+1)*1000+'px'
        }
        return(
            <div className="slider-wrapper" onMouseOver={()=>{clearInterval(this.$timer)}} onMouseOut={()=>{this.play()}}>
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map((item,index)=>{
                            return <li key={index} className="slider"><img src={item.src} alt={item.index}/></li>
                        })
                    }
                    <li key={len} className="slider"><img src={this.props.images[0].src} alt={this.props.images[0].alt}/></li>
                </ul>
                <div className="slider-arrows">
                    <span className="arrow arrow-left" onClick={()=>{this.go(-1)}}>&lt;</span>
                    <span className="arrow arrow-right" onClick={()=>{this.go(1)}}>&gt;</span>
                </div>
                <div className="slider-dots">
                    {
                        this.props.images.map((item,index)=>{
                            return <span key={index} onClick={()=>{this.go(index-this.state.pos)}} className={'dot '+((this.state.pos==index||this.state.pos==4&&index==0)?'active':'')}></span>
                        })
                    }
                </div>
            </div>
        )
    }
}
