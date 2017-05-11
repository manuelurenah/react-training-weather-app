import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Search = ({ hintText, mini, style }) => (
    <div className="search-container">
        <div className={`${!mini ? 'col s6 offset-s2' : ''}`}>
            <TextField
                inputStyle={style.inputStyle}
                hintText={hintText}
                hintStyle={style.hintStyle}
                style={style.textField}
            />
        </div>
        <div className={`${!mini ? 'col s2' : ''}`}>
            <RaisedButton
                label="Search"
                style={style.raisedButton}
            />
        </div>
    </div>
);

Search.propTypes = {
    hintText: PropTypes.string.isRequired,
    mini: PropTypes.bool,
    style: PropTypes.shape({
        hintStyle: PropTypes.shape({
            color: PropTypes.string,
        }),
        inputStyle: PropTypes.shape({
            color: PropTypes.string,
        }),
        raisedButton: PropTypes.shape({
            width: PropTypes.string,
        }),
        textField: PropTypes.shape({
            width: PropTypes.string,
        }),
    }),
};

Search.defaultProps = {
    mini: false,
    style: {},
};

export default Search;
