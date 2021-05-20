import React, { Component } from 'react';
import DragList from '../components/app/dragRace/DragList';
import { fetchQueens } from '../services/DragService';


export default class DragContainer extends Component {
    state = {
      loading: true,
      queens: []   
    };

    async componentDidMount() {

      const queens = await fetchQueens();

      this.setState({
        queens,
        loading: false
      });
    }
    render() {
      const { loading, queens } = this.state;
     
      if(loading) return (
        <section role="img" aria-label="loading">
          <img role="spinner"
            aria-label="loading spinner" 
            src="loadingedit3.gif"
          />
        </section>
      );
      else return <DragList queens = { queens } />;
    }
}
