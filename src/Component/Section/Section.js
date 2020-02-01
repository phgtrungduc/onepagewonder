import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: false,
            edit: "",
            noidung: ""
        }

    }
    edit = () =>{
        if (this.state.edit) {
            this.setState (
                {
                    edit: ""
                }
            )
        }
        else {
            this.setState(
                {
                    edit:
                    (
                        <div classname="form-group">
                            <input type="text" className="form-control" />
                            <button className="btn btn-block btn-primary" onClick={this.edit}>Save</button>
                        </div>
                    )
                }
            );
        }
    }
    editbody = () => {

    }
    render() {
        return (

            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={"col-lg-6 order-lg-" + this.props.uutien1}>
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src={this.props.link} alt="" />
                                </div>
                            </div>
                            <div className={"col-lg-6 order-lg-" + this.props.uutien2}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.head}</h2>
                                    <p>{this.props.body}</p>

                                </div>

                            </div>
                        </div>
                        <button className="btn btn-group">
                            <button className="btn btn-success" onClick={this.edit}>Edit</button>
                            <button className="btn btn-warning">Remove</button>
                        </button>
                    </div>
                </section>
                {this.state.edit}
            </div>
        );
    }
}

export default Section;