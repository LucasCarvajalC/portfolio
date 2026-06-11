import Services from "../components/services/Services.jsx";
import ContactButton from "../components/contactButton/ContactButton.jsx";
import NavBar from "../components/navigationbar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-full h-full flex items-center justify-center px-20 bg-black">
        <Services />
        <ContactButton />
      </div>
    </>
  )
}

export default App
