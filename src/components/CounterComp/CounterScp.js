import { Component } from 'react'
import './CounterStl.css'

class CounterComp extends Component {

    state = {
        counter : 0,
        counterTp : false,
    }

    minusFunc(){
        this.setState({
            counter : this.state.counter -= 1,

        })
    }

    plusFunc(){
        
        this.setState({
            counter : this.state.counter += 1,
        })
    }

    changevaluTpFunc(){
        this.setState({
            counterTp : !this.state.counterTp
        })
    }

    getInpVal(e){
        this.setState({
            counter : e
        })
    }


    render(){
        return (
            <div>
                <button className='prev_btn' onClick={() => this.minusFunc()}>
                    minus
                </button>

                <div className='prev_btn'>
                    {/* <input type='number' /> */}
                    {this.state.counterTp ?
                    <div onDoubleClick={() => this.changevaluTpFunc()}>
                            <input type='number' onChange={(e) => this.getInpVal(e.target.value)}/>
                        </div>
                    : <div onClick={() => this.changevaluTpFunc()}>
                        {this.state.counter}
                        </div>}

                </div>

                <button className='prev_btn' onClick={() => this.plusFunc()}>
                    plus
                </button>
            </div>
        )
    }
}


export default CounterComp