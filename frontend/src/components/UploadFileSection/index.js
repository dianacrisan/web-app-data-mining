import React from 'react';
import './index.css'
import axios from 'axios';


class UploadFileSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler = event => {
        console.log("Hello " + event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        // ${process.env.PORT}
        axios.post("http://localhost:3000/upload", data, { headers: { 'Content-Type': 'application/json' } } )
            .then(res => { // then print response status
                console.log(res.statusText)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <>
                <div class="upload-container">
                    <div class="upload-column">
                        <form class="upload-form" method="post" action="#" id="#">
                            <div class="form-group files">
                                <input type="file" name="file" class="form-control" multiple="" onChange={this.onChangeHandler} />
                            </div>
                        </form>
                        <button type="button" class="btn-for-upload" onClick={this.onClickHandler}>Upload</button>
                    </div>
                </div>
            </>
        )
    }
}

export default UploadFileSection;
