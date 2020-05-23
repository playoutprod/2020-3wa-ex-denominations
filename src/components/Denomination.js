import React,{Component} from 'react';
import Token from './Token';
import '../css/forms.css';

export default class Denomination extends Component{
  constructor(props){
    super(props);
    this.state = {
      tokens : [],
      value : 0
    }
  }

  calculate = (event)=>{
    this.setState(prevState => {
      const tokens = prevState.tokens.length === 0 ? this.props.tokens : prevState.tokens;
      return({tokens : tokens.sort(function(a, b){return b-a})})
    })
  }

  handleChange = (event) =>{
    this.setState(
      {
        value : event.target.value,
        tokens : []
      })
  }

  render(){

    let value = this.state.value;

    return(
      <div className="denomination">
        <div className="controls">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="value" className="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" value={this.state.value} onChange={this.handleChange}/>
          <label className="mdl-textfield__label" htmlFor="value">Value...</label>
          </div>
          <div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.calculate}>Generate Token</button>
          </div>
        </div>
        <div className="view">
        {
          this.state.value > 0 && this.state.tokens.length>0 &&
          <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead><tr><th>Token value</th><th>Count</th></tr></thead>
            <tbody>
            {
              this.state.tokens.map((token,k)=>{
                let count = Math.floor(value/token);
                value = value % token;
                return((
                  count>0 && <Token key={k} value={token} count={count}/>
                ))
              })
            }
            </tbody>
          </table>
        }
        </div>
      </div>
    )
  }
}
