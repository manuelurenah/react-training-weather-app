import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { style, styleMini } from './style';

const Search = ({ errorText, hintText, mini, onButtonClick, onInputChange }) => {
    const baseStyle = mini ? styleMini : style;

    return (
        <div className="search-container">
            <div className={`${!mini ? 'col s6 offset-s2' : ''}`}>
                <TextField
                    errorText={errorText}
                    inputStyle={baseStyle.inputStyle}
                    hintText={hintText}
                    hintStyle={baseStyle.hintStyle}
                    onChange={onInputChange}
                    style={baseStyle.textField}
                />
            </div>
            <div className={`${!mini ? 'col s2' : ''}`}>
                <RaisedButton
                    label="Search"
                    style={baseStyle.raisedButton}
                    onTouchTap={onButtonClick}
                />
            </div>
        </div>
    );
};

Search.propTypes = {
    errorText: PropTypes.string,
    hintText: PropTypes.string.isRequired,
    mini: PropTypes.bool,
    onButtonClick: PropTypes.func,
    onInputChange: PropTypes.func,
};

Search.defaultProps = {
    errorText: '',
    mini: false,
    onButtonClick: () => {},
    onInputChange: () => {},
};

export default Search;
