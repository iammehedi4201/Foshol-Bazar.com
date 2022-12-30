import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="About-section">
        <Card className="text-center col-5 space bg-color">
          <Card.Body>
            <Card.Title>
              <h2 className="border-bottom">About us</h2>
            </Card.Title>
            <Card.Text className="">
              Article evident arrived express highest men did boy. Mistress
              sensible entirely am so. Quick can manor smart money hopes worth
              too. Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered use
              dispatched melancholy sympathize discretion led. Article evident
              arrived express highest men did boy. Mistress sensible entirely am
              so. Quick can manor smart money hopes worth too. Comfort produce
              husband boy her had hearing. Law others theirs passed but wishes.
              You day real less till dear read. Considered use dispatched
              melancholy sympathize discretion led. Article evident arrived
              express highest men did boy. Mistress sensible entirely am so. Quick
              can manor smart money hopes worth too. Comfort produce husband boy
              her had hearing. Law others theirs passed but wishes. You day real
              less till dear read. Considered use dispatched melancholy sympathize
              discretion .
            </Card.Text>
            <Button variant="danger">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default AboutUs;