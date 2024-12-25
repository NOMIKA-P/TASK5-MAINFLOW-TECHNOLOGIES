import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to My React App</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <section id="home">
        <h2>Home</h2>
        <p>This is the home section of the application.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>This section contains information about the application.</p>
      </section>
      <section id="services">
        <h2>Services</h2>
        <p>Here are the services offered by the application.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out through this section.</p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 My React App</p>
    </footer>
  );
}

export default App;
