import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./colorCards"

function App() {
  return (
    <div class="container">     
            <Card 
              cardColor="red"
              title="Having Money"
              subtitle="Not having Money"
              description="Life is Real"
            />
          
            <Card 
              cardColor="green"
              title="Reason"
              subtitle="Nonreason"
              description="Getting life together"
            />

            <Card 
              cardColor="red"
              title="Aging"
              subtitle="Reserving youth"
              description="Aging cream"
            />

            <Card 
              cardColor="blue"
              title="My Best"
              subtitle="Being my best"
              description="Surrounding myself around good vides Only"
            />

            <Card 
              cardColor="pink"
              title="Traquility"
              subtitle="Peaceful"
              description="Alone by myself in a quiet space." 
            />

            <Card 
              cardColor="red"
              title="New Beginnings"
              subtitle="Old Beginnings"
              description="Starting off fresh"
            />
        
            <Card 
              cardColor="green"
              title="Maintaing"
              subtitle="Adjusting"
              description="Getting it together"
            />

            <Card 
              cardColor="red"
              title="Decisions"
              subtitle="Thinking"
              description="Freedom thinkers"
          />

          <Card 
              cardColor="blue"
              title="growth"
              subtitle="Developemnt"
              description="Growth mindset"
            />

            <Card 
              cardColor="pink"
              title="Better World"
              subtitle="Badworld"
              description="Knowing your limits"
            />
    </div>
  );
}

export default App;