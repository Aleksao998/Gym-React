import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
function ContactPage() {
  return (
    <div style={{ marginTop: "70px" }}>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Pocetna</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Kontakt</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default ContactPage;
