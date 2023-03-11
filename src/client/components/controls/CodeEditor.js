import React from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";

const editorStyle = {
    border: "None", 
};

export default class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    };

    onChange(newValue) {
        this.props.onChange(newValue);
    };

    render() {
        return(
            <AceEditor style = {editorStyle} readOnly = {false} onChange = {this.onChange} width = "100%" height = "30vh" mode = "java"
                theme = "github" name = "aceCodeEditor" fontSize = {14} showPrintMargin showGutter highlightActiveLine value = {this.props.code}
                editorProps = {{
                    $blockscrolling: true, enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true
                }}
                setOptions = {{
                    showLineNumbers: true, tabSize: 2,
                }}/>
        );
    }
};

CodeEditor.propTypes = {
    code: PropTypes.string.isRequired, onChange: PropTypes.func.isRequired
};