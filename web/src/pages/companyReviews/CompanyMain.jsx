import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Route } from 'react-router';
import { Container } from 'react-bootstrap';

import Button from '../../components/Button';
import getCompanyDetails from '../../api/reviews/getCompanyDetails';
import CompanyNav from '../../components/CompanyNav';
import './css/CompanyProfile.css';
import Snapshot from './snapshot/Snapshot';
import AboutCompany from './about/AboutCompany';
import ReviewsMain from './reviews/ReviewsMain';
import SalariesMain from './salaries/SalariesMain';

function CompanyMain({ match }) {
  const [companyDetails, setCompanyDetails] = useState({});
  const updateDetails = async () => {
    const companyData = await getCompanyDetails(match.params.id);
    if (!companyData) return;
    setCompanyDetails(companyData);
  };

  console.log(companyDetails);

  useEffect(() => {
    updateDetails();
  }, []);

  return (
    <Container fluid>
      <div
        className="row"
        style={{
          overflowX: 'hidden', display: 'flex', justifyContent: 'center',
        }}
      >
        <img
          className="company-image"
          src="https://ubereats-media.s3.amazonaws.com/1619644672652.jpeg"
          alt="sample"
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '900px',
          justifyContent: 'space-between',
          margin: '0 auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          alignItems: 'flex-end',
          marginTop: '-20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <img
            className="company-logo"
            src="https://ubereats-media.s3.amazonaws.com/amazon-logo-square.jpg"
            alt="Logo"
          />
          <div style={{ marginLeft: '20px', marginTop: '30px' }}>
            <p style={{ fontSize: '1.25rem', color: 'black', fontWeight: 700 }}>{companyDetails ? companyDetails.name : ''}</p>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '-20px',
            }}
            >
              <p style={{ fontSize: '1.1rem', color: 'black', fontWeight: 700 }}>
                61
              </p>
              {' '}
              <hr style={{
                marginLeft: '10px',
                marginRight: '10px',
                borderWidth: '0.5px',
                height: '40px',
                color: 'grey',
                marginBottom: 0,
                display: 'inline-block',
              }}
              />
              {' '}
              <p style={{
                fontSize: '1.1rem', color: 'black', fontWeight: 700, marginRight: '10px',
              }}
              >
                4.2
              </p>
              <StarRatings
                rating={4.2}
                starRatedColor="#9D2B6B"
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="2px"
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
          <Button label="Follow" style={{ width: '200px' }} />
          <p style={{ fontSize: '10px', color: '#6f6f6f' }}>Get weekly updates, new jobs and reviews</p>
        </div>
      </div>

      <div className="wrapper" style={{ marginTop: '10px' }}>
        <CompanyNav />
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '900px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '0 auto',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <Route exact path={`${match.path}/`} component={Snapshot} />
          <Route path={`${match.path}/about`} component={AboutCompany} />
          <Route path={`${match.path}/reviews`} component={ReviewsMain} />
          <Route path={`${match.path}/salaries`} component={SalariesMain} />
        </div>
      </div>
    </Container>
  );
}

export default CompanyMain;
