import React, { Component } from 'react';
import DragDetail from '../components/app/dragRace/DragDetail';
import { fetchQueenById } from '../services/DragService';

export default class DetailContainer extends Component {
    state = {
      loading: true,
      queen: {}
    }

    async componentDidMount() {
      const { id } = this.props.match.params;

      const queen = await fetchQueenById(id);

      this.setState({
        queen,
        loading: false
      });
    }
    render() {
      const { loading, queen } = this.state;
     console.log(queen, 'queeeen');
      if(loading) return (
        <section role="img" aria-label="loading">
          <img role="spinner"
            aria-label="loading spinner" 
            src="public/loadingedit3.gif"
          />
        </section>
      );
      else return <DragDetail { ...queen } />;
    }
}
