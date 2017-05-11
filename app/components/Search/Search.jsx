import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { style, styleMini } from './style';

const Search = ({ hintText, mini }) => {
    const baseStyle = mini ? styleMini : style;

    return (
        <div className="search-container">
            <div className={`${!mini ? 'col s6 offset-s2' : 'col s2'}`}>
                <TextField
                    inputStyle={baseStyle.inputStyle}
                    hintText={hintText}
                    hintStyle={baseStyle.hintStyle}
                    style={baseStyle.textField}
                />
            </div>
            <div className={`${!mini ? 'col s2' : 'col s1'}`}>
                <RaisedButton
                    label="Search"
                    style={baseStyle.raisedButton}
                />
            </div>
        </div>
    );
};

Search.propTypes = {
    hintText: PropTypes.string.isRequired,
    mini: PropTypes.bool,
};

Search.defaultProps = {
    mini: false,
};

export default Search;
