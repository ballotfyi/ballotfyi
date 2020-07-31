import withBasicTemplate from 'template/basic';
import Header from 'components/layout/header'
import { Space, LinkOut } from 'components/util';
import { Row, Col } from 'antd';

const PrivacyPage = () => {
  return (
    <>
      <Header/>
      <Row>
        <Col
          xs={{ offset: 1, span: 18 }}
          xl={{ offset: 3, span: 13 }}
          lg={{ offset: 1, span: 10 }}
          xxl={{ offset: 5, span: 14 }}
        >
          <h1>How We Handle Your Data | Our Policy</h1>
          <Space h={40} />
          <h2>Our Commitment</h2>
            <p>Ballot.fyi will collect the minimal amount of data about its users to provide good service, and we will never monetize this data. We do not host or display any advertisements, nor serve any trackers for any advertisement purpose. We do not store any personal information on any internal databases. As much as possible, we will respect and respond to your privacy requests.
            </p>
          <h2>Summary</h2>
          <p>
            In short, and in plain English, ballot.fyi does not explicitly use, transfer, sell, or monetize any collected personal information for any commercial purposes outside of ballot.fyi. To better understand our audience, the only means of passive data collection we employ is Google Analytics and Netlify Analytics, which collects service usage data. You can read their data policies <LinkOut href="https://policies.google.com/privacy">here</LinkOut> and <LinkOut href="https://www.netlify.com/privacy/">here</LinkOut>, respectively. The only place you can possibly volunteer any personal information is our form to subscribe to our email list, administered through Mailchimp. You can read their data retention policy <LinkOut href="https://mailchimp.com/legal/privacy/">here</LinkOut>. We discuss our relationship with these third-party services in more depth below.
            <br/><br/>
            We do not advertise on this site, nor do we serve any cookies for advertising purposes.
            <br/><br/>
            We do not employ any user login system or payment integration. Thus, we do not store any passwords or tokens from other services with highly-sensitive information.
            <br/><br/>
            Ballot.fyi is a statically-generated site. With the exception of serving browser-specified prefences such as preferred language and font size, our service is largely the same across users.
          </p>
          
          <h2>Who we are</h2>
          <p>
            Ballot.fyi is a personal project, 100% independently owned by Jimmy Chion, a person, and maintained by a team of volunteers. Ballot.fyi has no affiliation with any business entities, nor any current (or future) obligations or debts – implicit or explicit – to any persons or entities.
            <br/>
            <br/>
            For full disclosure, from 2017 to 2018, ballot.fyi was a project under the business entity Amir & Erica, Inc. (DBA By The Bay), and funded by a grant from the <LinkOut href="https://knightfoundation.org/">John S. and James L. Knight Foundation</LinkOut>, a nonpartisan organization. Amir & Erica (a pun off &ldquo;America&rdquo;) was dissolved in 2019 due to lack of funding, and the rights to ballot.fyi were transferred back to Jimmy Chion.
            <br/>
            <br/>
            From its inception in Oct 2015 to its transfer to Amir & Erica, it was a personal project, owned solely by Jimmy Chion.
            <br/>
            <br/>
            Ballot.fyi&apos;s primary audience is California residents.
          </p>

          <h2>Do Not Track (DNT)</h2>
          <p>
            Ballot.fyi&apos;s website respects the Do Not Track header supplied by modern browsers. We will detect the DNT header if your browser emits it, and ballot.fyi will not employ Google Analytics on the ballot.fyi domain for that session. If you are unfamiliar with DNT, or would like to enable it, we recommend reading the <LinkOut href='https://en.wikipedia.org/wiki/Do_Not_Track'>Wikipedia article</LinkOut>, and then referring to guides at <LinkOut href="https://allaboutdnt.com/">allaboutdnt.com</LinkOut>. To be clear, ballot.fyi does not affiliate with Wikipedia or allaboutdnt.com, nor do we guarantee that their information is accurate.
          </p>

          <h2>Cookies</h2>
          <p>
            Ballot.fyi, through Google Analytics, serves cookies to track usage of our service.
            Here are <LinkOut href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">all the cookies used by Google Analytics</LinkOut>. As mentioned above, we will not serve cookies if the Do Not Track header indicates that websites should not track the session.
          </p>

          <h2>Service Usage Data Flow</h2>
          <p>
            Ballot.fyi, when permitted, will record service usage data for analytical purposes. The data is recorded by up to three providers, listed below. These are the only three third-party entities that can receive usage data about you from www.ballot.fyi. Below, we also describe some of the data these services collect from our shared users that are available to us. For full descriptions of the data each service provides to its customers, such as ballot.fyi, we encourage you to read their privacy policies or terms of services.
          </p>
          <h3>Google Analytics</h3>
          <p>
            Google Analytics (analytics.google.com) is a widely-used analytics service provided by Google that tracks unique users. To be clear, Google Analytics is able to track a wide amount of information including:
            <ul>
              <li>Links you tapped / pages you navigated to</li>
              <li>How long you&apos;ve spent on the site</li>
              <li>An IP Address</li>
              <li>Your probable location</li>
              <li>How you arrived at ballot.fyi</li>
              <li>Information about the device and browser you&apos;re using</li>
              <li>Your demographics such as your age group and affinity groups</li>
            </ul>
            That is a subset of what is tracked. Ballot.fyi will use this information for analytical, internal purposes, only. For more information: <LinkOut href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</LinkOut>.
          </p>
          <h3>Netlify</h3>
          <p>
            Netlify (www.netlify.com) is a website-hosting service and hosts www.ballot.fyi, 2018.ballot.fyi, and 2016.ballot.fyi. Netlify provides an optional service called Analytics for Netlify&apos;s customers to understand usage of that customer&apos; website(s). Ballot.fyi has opted in to this feature to better understand its viewership. For those who are curious as to why there are two analytics providers, here&apos;s why. As the hosting service, Netlify Analytics has advantages over client-side analytics. You can read about the types of information collected by Netlify and viewable by ballot.fyi <LinkOut href="https://docs.netlify.com/monitor-sites/analytics/#get-started">here</LinkOut>. All information is deidentified.
            <br/>
            <br/>
            For more information: <LinkOut href="https://www.netlify.com/privacy/">Netlify&apos;s Privacy Policy</LinkOut>.
          </p>
          <h3>Mailchimp</h3>
          <p>
            Mailchimp (www.mailchimp.com) is a service to manage email subscribers, email lists, and email campaigns. By nature of having at least one email list, ballot.fyi, must manage email addresses. Ballot.fyi does not store any email addresses (or any personal information from visitors) in any of the databases it owns. All email addresses are stored within Mailchimp. Some usage data is sent from Mailchimp to Google Analytics.
            <br/>
            <br/>
            Within the boundaries of its privacy policy, Mailchimp will track data regarding email campaigns such as email opens and link clicks.
            <br/>
            <br/>
            You may have been added to the email list if you have subscribed to a previous service of ballot.fyi at any point in the past, or if you subscribed to By The Bay, a similar and affiliated service to ballot.fyi in 2018. If you are a subscriber, you may unsubscribe immediately at any time.
            <br/>
            <br/>
            For more information: <LinkOut href="https://mailchimp.com/legal/privacy/">Mailchimp&apos;s Privacy Policy</LinkOut>.
          </p>

          <h2>CCPA</h2>
          <p>
            The California Consumer Privacy Act of 2018 provides rights to all California residents with respect to the data that a company holds about them. For example, you have the right, as a California resident, to know &ldquo;what personal information [a company has] collected, used, shared, or sold about you&rdquo;, and why they did so. Please read more about it <LinkOut href="https://oag.ca.gov/privacy/ccpa">here</LinkOut>.
            <br/>
            <br/>
            CCPA does not explicitly apply to ballot.fyi because we are not a for-profit company that makes more than $25 million a year. However, because our primary audience is made up for Californians, and we believe in the rights espoused by the law, we will voluntarily comply with requests that fall under the CCPA. 
          </p>

          <h2>Contact</h2>
          <p>
            For any questions, comments, or requests please email us at fax@ballot.fyi (via email).
          </p>
          <Space h={60} />
        </Col>
      </Row>
    </>
  );
};

export default withBasicTemplate(PrivacyPage);