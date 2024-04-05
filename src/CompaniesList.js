import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CompaniesList from './components/CompaniesList';

function App() {
    return (
        <Router>
            <div>
                {/* Other routes */}
                <Route path="/companies" component={CompaniesList} />
            </div>
        </Router>
    );
}

export default App;
