import React from 'react';

function ContactMe({ currentPage, handlePageChange }) {
  const styles = {
      container: {
          margin: "20px",
      },
      formGroup: {
      },
      label: {
          marginTop: 10,
          display: "block",
          fontSize: 18
      },
      input: {
          marginTop: 3,
          width: "100%",
          height: 35,
          fontSize: 18
      },
      textarea: {
          marginTop: 3,
          width: "100%",
          height: 250,
          fontSize: 18
      },
      button: {
        marginTop: 3,
        backgroundColor: "darkslategrey",
        width: 100,
        height: 50,
        fontSize: 18,
        color: "white",
        borderRadius: "10%",
        cursor: "pointer",
      }
  }

  const formHandler = function(event) {
    event.preventDefault();


    // for (let input of inputs) {
    //   input.textContent = '';
    // }
  }

  return (
    <section className="section-cards" id="about-me">
      <div className="title">
          <h2>Contact</h2>
      </div>
      <div style={styles.container} id="body">
        <form id="myForm">
            <div style={styles.formGroup} className="form-group">
                <label style={styles.label} >Name:</label>
                <input style={styles.input} type="text" className="form-control" id="Name" aria-describedby="emailHelp"></input>
            </div>
            <div style={styles.formGroup} className="form-group">
                <label style={styles.label} >Email:</label>
                <input style={styles.input} type="text" className="form-control" ></input>
            </div>
            <div style={styles.formGroup} className="form-group">
                <label style={styles.label} >Message:</label>
                <textarea style={styles.textarea}></textarea>
            </div>
            <button style={styles.button} type="submit" onSubmit={() => formHandler()}>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe