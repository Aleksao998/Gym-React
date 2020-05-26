import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { withRouter } from "react-router-dom";
function ContactPage(props) {
  return (
    <div style={{ marginTop: "70px" }}>
      <Breadcrumb>
        <BreadcrumbItem>
          <a
            onClick={() => {
              props.history.push("/");
            }}
          >
            Pocetna
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Kontakt</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default withRouter(ContactPage);
