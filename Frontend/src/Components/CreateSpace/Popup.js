import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreateSpace from './CreateSpace'
import plus from '../../Assets/plus-sign.svg'

function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
    //   onClick={() => {
    //     // close modal when outside of modal is clicked
    //     // close();
    //   }}
    >
      <div
        className="modal-content"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close}>
        <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
        </button>
        {children}
      </div>
    </div>
  ) : null;
}
export default function App() {
  const [modalShown, toggleModal] = React.useState(false);
  return (
    <div className="App">
      {/* <p>modalShown: {modalShown.toString()}</p> */}
      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
      <div>
      <img className="text-white" src={plus} alt="plus" />
      </div>
      </button>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <CreateSpace/>
      </Modal>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
