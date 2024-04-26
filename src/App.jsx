import React from "react";
// import "./assets/css/style.css";
import { Container } from "@material-ui/core";
import Map from "./Map";
import L from 'leaflet';
import "./App.css"
export default function App() {
  var container = L.DomUtil.get('map');
  if(container != null){
      container._leaflet_id = null;
  }

  return (
    <Container disableGutters>
      <Map />
    </Container>
  );
}