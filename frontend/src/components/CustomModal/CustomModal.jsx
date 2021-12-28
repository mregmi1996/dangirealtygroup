import React from 'react'
import PropTypes from "prop-types";
import './CustomModal.scss';
import { FaCommentDots } from 'react-icons/fa'

function CustomModal(props) {
    return (
        <div id="myModal" className={`modal ${props.displayStyle}`}>
            <div className={`modal-content ${props.modalWidth}`}>
                {/* changeDisplayStyle function gets called when user presses cross button to close the modal */}
              <a onClick={() => props.changeDisplayStyle("close")}><span className="close-modal">&times;</span></a>
              <div>
                <div className="center-icon">
                    <FaCommentDots size="35px" color="#555863"/>
                </div>
                <p className="modal-font title">
                    {props.title}
                </p>
                <p className="modal-font subtitle">
                    {props.subtitle}
                </p>
              </div>
              {props.children}
            </div>
         </div>
    )
}

// propTypes to define what all types of props are accepted by this component
CustomModal.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
};

export default CustomModal