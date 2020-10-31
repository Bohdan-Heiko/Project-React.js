import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SelectedLanguage from './SelectedLanguage';
import RepoGrid from './RepoGrid';
import { fetchPopularRepos } from '../service/api';

class Popular extends Component {
  constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(selectedLanguage) {
        this.setState({ selectedLanguage, repos: null });
        fetchPopularRepos(selectedLanguage)
            .then(repos => this.setState({ repos }))
            .catch(error => this.setState({ error }))
    }

    render() {
        const { repos, selectedLanguage, error } = this.state;
        return (
            <>
                <SelectedLanguage
                    selectedLanguage={selectedLanguage}
                    onSelect={this.updateLanguage}
                />

                {repos ?
                    <RepoGrid repos={repos} /> :
                    <div className='loader'></div>
                }

                 {error ?
                    <>
                        <p>{error}</p>
                        <Link to='/'>Go to Home page</Link>
                    </> :
                    null
                }

            </>
        )
    }
}

export default Popular;
