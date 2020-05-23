import React,{Component} from 'react';

export default class Token extends Component{
  render(){
    return(
      <tr className="Token">
        <td className="label">token {this.props.value}</td><td className="value">{this.props.count}</td>
      </tr>
    )
  }
}
