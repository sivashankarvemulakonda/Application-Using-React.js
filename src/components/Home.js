import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the homepage!</p>
            
            <h2>About Tata Group</h2>
            <p>
                Tata Group is one of India's largest and oldest conglomerates, founded in 1868 by Jamsetji Tata. 
                The group operates in over 100 countries across six continents, employing over 750,000 people. 
                It comprises more than 100 companies, operating in various industries including steel, automotive, 
                information technology, communications, power, beverages, and chemicals.
            </p>
            <p>
                Some of its most well-known companies include:
            </p>
            <ul>
                <li>Tata Consultancy Services (TCS) – A global leader in IT services.</li>
                <li>Tata Motors – Famous for producing cars, trucks, and buses, including the iconic Jaguar and Land Rover brands.</li>
                <li>Tata Steel – One of the largest steelmakers in the world.</li>
                <li>Tata Power – One of India's largest integrated power companies.</li>
                <li>Titan Company – Known for watches, eyewear, and jewelry brands.</li>
                <li>Tata Chemicals – A leading player in chemicals and related products.</li>
            </ul>
            <p>
                Tata Group is renowned not only for its business ventures but also for its philanthropic work, 
                with many of its profits channeled into various trusts and charities.
            </p>

            {/* Social Media Icons */}
            <h3>Follow Tata Group on Social Media</h3>
            <div style={{ fontSize: '24px' }}>
                <a href="https://www.facebook.com/tataGroup" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com/tataGroup" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/tataGroup" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/tataGroup" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Home;
