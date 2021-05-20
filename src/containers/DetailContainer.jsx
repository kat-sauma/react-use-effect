import React, { Component } from 'react';
import DragDetail from '../components/app/dragRace/DragDetail';
import { fetchQueenById } from '../services/DragService';

export default class DetailContainer extends Component {
    state = {
      queen: { }
    }

    async componentDidMount() {
      const { id } = this.props.match.params;

      const queen = await fetchQueenById(id);

      this.setState({
        queen
      });
    }
    render() {
      console.log(this.state.queen, 'hi');
      const { queen } = this.state;
      return <DragDetail queen={queen} />;
    }
}
