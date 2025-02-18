import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // استيراد Link من react-router-dom
import "./Index.css";
import profile from "/profile.png";

const Sidbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // إذا كانت الشاشة أصغر من 800px، نقفل الـ Sidebar تلقائيًا
      setIsMobile(window.innerWidth <= 800);
    };

    // نعمل listener لحجم الشاشة عند التغيير
    window.addEventListener("resize", handleResize);

    // أول ما التطبيق يشتغل، نحدد إذا كان الجهاز موبايل أم لا
    handleResize();

    // تنظيف الlistener عند الخروج من الـ component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // عند تكبير الشاشة، نفتح الـ Sidebar مباشرة إذا كانت الشاشة أكبر من 800px
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <>
      {/* زر الفتح ☰ (يظهر فقط في الموبايل) */}
      <button className="toggle-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      {/* القائمة الجانبية */}
      <div className={`Sidbar ${isOpen ? "open" : "closed"}`}>
        {/* زر الإغلاق X (يظهر فقط في الموبايل) */}
        <button onClick={() => setIsOpen(false)} className="close">
          X
        </button>

        <ul>
          <li>
            <div className="img">
              <img src={profile} alt="Profile" />
            </div>
            <div className="titleSid">
              <h2>Rabea Shaban</h2>
              <p>Web Developer</p>
            </div>
          </li>
          <li>
            <Link to="/home">Home</Link> {/* تغيير الرابط لاستخدام React Router */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* تغيير الرابط لاستخدام React Router */}
          </li>
          <li>
            <Link to="/skills">Skills</Link> {/* تغيير الرابط لاستخدام React Router */}
          </li>
          <li>
            <Link to="/experience">Experience</Link> {/* تغيير الرابط لاستخدام React Router */}
          </li>
          <li>
            <Link to="/work">Work</Link> {/* تغيير الرابط لاستخدام React Router */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidbar;
