'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Các State phục vụ cho tính năng tìm kiếm, bộ lọc và đăng nhập
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [searchInput, setSearchInput] = useState<string>(''); 
  const [filterType, setFilterType] = useState<string>('all'); 
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 
  const [username, setUsername] = useState<string>(''); 

  const rooms = [
    {
      id: 'standard',
      title: 'Phòng Standard',
      desc: 'Phòng tiêu chuẩn, tiện nghi cơ bản, ấm cúng.',
      price: '800.000đ',
      stars: ['★', '★', '★', '★', '☆'],
      img: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      detail: 'Phòng tiêu chuẩn ấm cúng, phù hợp cho khách du lịch cá nhân hoặc cặp đôi muốn tiết kiệm chi phí nhưng vẫn đảm bảo sự sạch sự và tiện nghi cơ bản.',
      specs: ['Giường Queen size', 'TV màn hình phẳng', 'Máy sấy tóc', 'Wifi miễn phí', 'Điều hòa nhiệt độ', 'Tủ quần áo'],
      size: '30m²',
      capacity: '2 người lớn'
    },
    {
      id: 'deluxe',
      title: 'Phòng Deluxe',
      desc: 'Phòng cao cấp, rộng rãi, view thành phố đẹp.',
      price: '1.200.000đ',
      stars: ['★', '★', '★', '★', '★'],
      img: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
      detail: 'Phòng Deluxe mang đến không gian nghỉ ngơi thoải mái hơn với khu vực làm việc nhỏ, ghế sofa thư giãn và ban công nhìn ra cảnh quan thành phố sôi động.',
      specs: ['Giường King size cao cấp', 'Ban công riêng', 'Bàn làm việc', 'Wifi tốc độ cao', 'Minibar miễn phí (1 lần)', 'Phòng tắm vòi sen & bồn tắm'],
      size: '45m²',
      capacity: '2 người lớn & 1 trẻ em'
    },
    {
      id: 'suite',
      title: 'Phòng Suite',
      desc: 'Căn hộ hạng sang, phòng khách riêng, view biển trọn vẹn.',
      price: '2.400.000đ',
      stars: ['★', '★', '★', '★', '★'],
      img: 'https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg',
      detail: 'Đây là căn hộ cao cấp nhất của chúng tôi, cung cấp không gian sống và thư giãn lý tưởng với phòng khách riêng, bồn tắm nằm và ban công nhìn ra biển trọn vẹn.',
      specs: ['Giường King size', 'Bồn tắm Jacuzzi', 'Két sắt điện tử', 'Wifi tốc độ cao miễn phí', 'Mini bar miễn phí hàng ngày', 'Dịch vụ giặt ủi miễn phí'],
      size: '65m²',
      capacity: '2 người lớn & 2 trẻ em'
    }
  ];

  const reviews = [
    { id: 1, name: 'Nguyễn Văn A', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Dịch vụ tuyệt vời! Phòng Suite có view biển cực đẹp, nhân viên hỗ trợ nhiệt tình 24/7.' },
    { id: 2, name: 'Trần Thị B', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 4, comment: 'Phòng Deluxe sạch sẽ, rộng rãi. Đồ ăn sáng ngon miệng, hồ bơi vô cực rất chill.' },
    { id: 3, name: 'Lê Minh C', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Khách sạn đáng tiền, vị trí thuận lợi ngay trung tâm. Sẽ quay lại vào lần tới!' }
  ];

  const handleBookingSubmit = (e: React.FormEvent, roomTitle: string) => {
    e.preventDefault();
    alert(`Đặt thành công ${roomTitle}! Hệ thống đã ghi nhận thông tin.`);
    setActiveModal(null);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    const element = document.getElementById('dat-phong');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setIsLoggedIn(true);
      setActiveModal(null);
    }
  };

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          room.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || room.id === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-light min-vh-100" style={{ scrollBehavior: 'smooth', fontFamily: 'Roboto, Arial, sans-serif' }}>
      {/* Import Bootstrap & Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#3417db', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#top">
            <i className="bi bi-house-door-fill me-2"></i>
            <span style={{ color: '#f7b32d' }}>Hotel</span>Booking
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link text-white active" href="#top">Trang Chủ</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#phong-nghi-container">Phòng</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#tien-ich-container">Tiện Ích</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#dat-phong">Đặt Phòng</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#danh-gia-container">Đánh Giá</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#lien-he">Liên Hệ</a></li>
            </ul>
            
            {/* 1. THANH TÌM KIẾM PHÒNG */}
            <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Tìm loại phòng..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className="btn btn-outline-warning" style={{ color: '#f7b32d', borderColor: '#f7b32d' }}>Tìm</button>
            </form>

            {/* 3. NÚT ĐĂNG NHẬP / ĐĂNG KÝ */}
            <div className="d-flex align-items-center">
              {isLoggedIn ? (
                <div className="bg-warning text-dark px-3 py-1.5 rounded-3 fw-bold d-flex align-items-center gap-2">
                  <i className="bi bi-person-circle fs-5"></i>
                  <span>Hi, {username}</span>
                  <button 
                    className="btn btn-sm btn-danger ms-2 fw-bold" 
                    onClick={() => { setIsLoggedIn(false); setUsername(''); }}
                    style={{ fontSize: '0.75rem' }}
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <button className="btn btn-warning fw-bold text-dark px-3" onClick={() => setActiveModal('login')}>
                  <i className="bi bi-box-arrow-in-right me-1"></i> Đăng Nhập
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div className="container mt-4" id="top">
        <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ height: '450px', background: '#000' }}>
          <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.7 }} alt="Hero" />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
            <h1 className="fw-bold display-4 text-shadow" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Trải nghiệm nghỉ dưỡng 4 sao</h1>
            <p className="fs-4" style={{ color: '#f7b32d', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Địa điểm hoàn hảo cho kỳ nghỉ của bạn.</p>
          </div>
        </div>
      </div>

      {/* THỐNG KÊ KHÁCH SẠN */}
      <div className="container mt-5 py-3">
        <div className="bg-white rounded-4 shadow-sm p-4 border-0">
          <div className="row text-center g-4">
            <div className="col-md-3 col-6">
              <i className="bi bi-building fs-1 text-primary mb-2"></i>
              <h3 className="fw-bold text-dark mb-1">150+</h3>
              <p className="text-muted mb-0 small uppercase fw-semibold">Phòng cao cấp</p>
            </div>
            <div className="col-md-3 col-6">
              <i className="bi bi-people-fill fs-1 text-success mb-2"></i>
              <h3 className="fw-bold text-dark mb-1">8,500+</h3>
              <p className="text-muted mb-0 small uppercase fw-semibold">Khách hàng hài lòng</p>
            </div>
            <div className="col-md-3 col-6">
              <i className="bi bi-award-fill fs-1 text-warning mb-2"></i>
              <h3 className="fw-bold text-dark mb-1">12+</h3>
              <p className="text-muted mb-0 small uppercase fw-semibold">Giải thưởng du lịch</p>
            </div>
            <div className="col-md-3 col-6">
              <i className="bi bi-geo-alt-fill fs-1 text-danger mb-2"></i>
              <h3 className="fw-bold text-dark mb-1">4.9 / 5</h3>
              <p className="text-muted mb-0 small uppercase fw-semibold">Đánh giá dịch vụ</p>
            </div>
          </div>
        </div>
      </div>

      {/* KHÁM PHÁ VỀ CHÚNG TÔI */}
      <div className="container mt-5 py-4">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#3417db' }}>KHÁM PHÁ VỀ CHÚNG TÔI</h2>
        <div className="row g-4">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 p-4 border-0 shadow-sm bg-white">
              <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" className="rounded mb-3 object-fit-cover w-100" height="200" alt="Giới thiệu" />
              <h3 className="fw-bold fs-4" style={{ color: '#3417db' }}>GIỚI THIỆU</h3>
              <p className="text-muted">Khách sạn chúng tôi mang đến không gian nghỉ dưỡng chuẩn <b>4 sao cao cấp</b>, phục vụ tận tâm – sang trọng – thoải mái.</p>
              <button className="btn btn-link p-0 text-start text-decoration-none" style={{ color: '#f7b32d' }} onClick={() => setActiveModal('about')}>Tìm hiểu thêm <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className="col-lg-4 mb-4" id="phong-nghi-container">
            <div className="card h-100 p-4 border-0 shadow-sm bg-white">
              <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" className="rounded mb-3 object-fit-cover w-100" height="200" alt="Phòng nghỉ" />
              <h3 className="fw-bold fs-4" style={{ color: '#3417db' }}>PHÒNG NGHỈ</h3>
              <p className="text-muted">Hệ thống phòng đa dạng: <b>Standard – Deluxe – Suite</b>, được thiết kế tinh tế đầy đủ tiện nghi hiện đại cùng view tuyệt đẹp.</p>
              <button className="btn btn-link p-0 text-start text-decoration-none" style={{ color: '#f7b32d' }} onClick={() => setActiveModal('all-rooms')}>Xem tất cả phòng <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className="col-lg-4 mb-4" id="tien-ich-container">
            <div className="card h-100 p-4 border-0 shadow-sm bg-white">
              <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" className="rounded mb-3 object-fit-cover w-100" height="200" alt="Tiện ích" />
              <h3 className="fw-bold fs-4" style={{ color: '#3417db' }}>TIỆN ÍCH</h3>
              <p className="text-muted">Tận hưởng trọn vẹn với <b>Hồ bơi vô cực</b> ngoài trời, nhà hàng chuẩn quốc tế, phòng gym hiện đại và dịch vụ đưa đón 24/7.</p>
              <button className="btn btn-link p-0 text-start text-decoration-none" style={{ color: '#f7b32d' }} onClick={() => setActiveModal('amenities')}>Danh sách tiện ích <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* DANH SÁCH PHÒNG NGHỈ VÀ BỘ LỌC LOẠI PHÒNG */}
      <div className="container mt-5 mb-5" id="dat-phong">
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#3417db' }}>LỰA CHỌN PHÒNG NGHỈ</h2>
        
        {/* 2. BỘ LỌC LOẠI PHÒNG */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          <button className={`btn rounded-pill px-4 fw-semibold ${filterType === 'all' ? 'btn-primary' : 'btn-outline-primary'}`} style={filterType === 'all' ? { backgroundColor: '#3417db' } : {}} onClick={() => setFilterType('all')}>Tất Cả</button>
          <button className={`btn rounded-pill px-4 fw-semibold ${filterType === 'standard' ? 'btn-primary' : 'btn-outline-primary'}`} style={filterType === 'standard' ? { backgroundColor: '#3417db' } : {}} onClick={() => setFilterType('standard')}>Hạng Standard</button>
          <button className={`btn rounded-pill px-4 fw-semibold ${filterType === 'deluxe' ? 'btn-primary' : 'btn-outline-primary'}`} style={filterType === 'deluxe' ? { backgroundColor: '#3417db' } : {}} onClick={() => setFilterType('deluxe')}>Hạng Deluxe</button>
          <button className={`btn rounded-pill px-4 fw-semibold ${filterType === 'suite' ? 'btn-primary' : 'btn-outline-primary'}`} style={filterType === 'suite' ? { backgroundColor: '#3417db' } : {}} onClick={() => setFilterType('suite')}>Hạng Suite</button>
        </div>

        {searchQuery && (
          <div className="text-center mb-4 alert alert-info py-2 mx-auto" style={{ maxWidth: '450px' }}>
            Kết quả tìm kiếm cho: "<b>{searchQuery}</b>" 
            <button className="btn btn-sm btn-link text-danger ms-2 p-0 text-decoration-none fw-bold" onClick={() => { setSearchQuery(''); setSearchInput(''); }}>Xóa</button>
          </div>
        )}

        <div className="row g-4">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div className="col-lg-4 col-md-6" key={room.id}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-4">
                  <img src={room.img} className="w-100 object-fit-cover" height="250" alt={room.title} />
                  <div className="card-body p-4">
                    <h5 className="fw-bold fs-4" style={{ color: '#3417db' }}>{room.title}</h5>
                    <p className="text-muted">{room.desc}</p>
                    <div className="mb-2" style={{ color: '#f7b32d' }}>
                      {room.stars.map((star, idx) => <span key={idx} className="me-1">{star}</span>)}
                    </div>
                    <p className="fw-bold text-danger fs-5">Giá từ {room.price} / đêm</p>
                    <button className="btn w-100 text-white fw-bold py-2 mt-2" style={{ backgroundColor: '#3417db' }} onClick={() => setActiveModal(room.id)}>
                      Xem Chi Tiết & Đặt
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <i className="bi bi-exclamation-circle text-muted fs-1 mb-3 d-block"></i>
              <h5 className="text-muted">Không tìm thấy phòng nào phù hợp.</h5>
            </div>
          )}
        </div>
      </div>

      {/* ĐÁNH GIÁ */}
      <div className="bg-white py-5 mt-5 border-top border-bottom" id="danh-gia-container">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#3417db' }}>ĐÁNH GIÁ TỪ KHÁCH HÀNG</h2>
          <div className="row g-4">
            {reviews.map((review) => (
              <div className="col-lg-4 col-md-6" key={review.id}>
                <div className="p-4 rounded-4 shadow-sm h-100 border bg-light">
                  <div className="d-flex align-items-center mb-3">
                    <img src={review.avatar} alt={review.name} className="rounded-circle me-3 object-fit-cover shadow-sm" width="55" height="55" />
                    <div>
                      <h6 className="fw-bold mb-0 text-dark">{review.name}</h6>
                      <div style={{ color: '#f7b32d', fontSize: '0.9rem' }}>
                        {Array.from({ length: review.rating }).map((_, i) => <span key={i} className="me-1">★</span>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-0 fst-italic">"{review.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-5 text-white" id="lien-he" style={{ backgroundColor: '#3417db' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">HotelBooking</h5>
              <p className="text-white-50">Khách sạn 4 sao, phục vụ tận tâm - Sang trọng - Thoải mái.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Liên kết nhanh</h5>
              <ul className="list-unstyled text-white-50">
                <li className="mb-2"><a href="#top" className="text-white-50 text-decoration-none">Về Chúng Tôi</a></li>
                <li className="mb-2"><a href="#dat-phong" className="text-white-50 text-decoration-none">Chính Sách</a></li>
                <li><a href="#top" className="text-white-50 text-decoration-none">FAQ</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Liên Hệ</h5>
              <p className="text-white-50 mb-1">Email: hieutran972006@gmail.com</p>
              <p className="text-white-50">Điện thoại: (84) 901559782</p>
            </div>
          </div>
          <div className="text-center pt-4 mt-4 border-top border-secondary text-white-50">
            <p className="mb-0">&copy; 2026 HotelBooking. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FORM POPUP ĐĂNG NHẬP */}
      {activeModal === 'login' && (
        <div className="modal show d-block bg-dark bg-opacity-50" style={{ zIndex: 1060 }}>
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content border-0 rounded-3 overflow-hidden">
              <div className="modal-header text-white" style={{ backgroundColor: '#3417db' }}>
                <h5 className="modal-title fw-bold"><i className="bi bi-box-arrow-in-right me-2"></i>ĐĂNG NHẬP HỆ THỐNG</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModal(null)}></button>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Tên đăng nhập hoặc Email</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nhập tên tài khoản" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label small fw-semibold">Mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu" required />
                  </div>
                  <button type="submit" className="btn btn-warning btn-lg w-100 fw-bold shadow-sm py-2 text-dark mb-3">
                    ĐĂNG NHẬP
                  </button>
                  <p className="text-center mb-0 text-muted small">
                    Chưa có tài khoản? <a href="#top" className="text-decoration-none fw-semibold" onClick={(e) => { e.preventDefault(); alert("Tính năng Đăng ký tài khoản đang được nâng cấp!"); }}>Đăng ký ngay</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CÁC MODAL CHI TIẾT KHÁC */}
      {activeModal === 'about' && (
        <div className="modal show d-block bg-dark bg-opacity-50" style={{ zIndex: 1060 }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 rounded-3 overflow-hidden">
              <div className="modal-header text-white" style={{ backgroundColor: '#3417db' }}>
                <h5 className="modal-title fw-bold">VỀ KHÁCH SẠN HOTELBOOKING</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModal(null)}></button>
              </div>
              <div className="modal-body p-4">
                <p className="text-muted">Khách sạn HotelBooking mang lại dịch vụ cá nhân hóa, đẳng cấp quốc tế chuẩn 4 sao cao cấp.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {rooms.map(room => activeModal === room.id && (
        <div className="modal show d-block bg-dark bg-opacity-50" style={{ zIndex: 1060 }} key={room.id}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content border-0 rounded-3 overflow-hidden">
              <div className="modal-header text-white" style={{ backgroundColor: '#3417db' }}>
                <h5 className="modal-title fw-bold">CHI TIẾT & ĐẶT {room.title.toUpperCase()}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setActiveModal(null)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-4">
                  <div className="col-lg-7 border-end">
                    <h4 className="fw-bold mb-2" style={{ color: '#3417db' }}>{room.title}</h4>
                    <img src={room.img} className="img-fluid rounded mb-3 w-100 object-fit-cover shadow-sm" style={{ height: '300px' }} alt="" />
                    <p>{room.detail}</p>
                  </div>
                  <div className="col-lg-5">
                    <h4 className="text-center fw-bold mb-1" style={{ color: '#3417db' }}>ĐẶT PHÒNG NGAY</h4>
                    <p className="text-center text-danger fw-bold fs-5 mb-4">Giá: {room.price} / đêm</p>
                    <form onSubmit={(e) => handleBookingSubmit(e, room.title)}>
                      <div className="mb-3"><label className="form-label small fw-semibold">Họ và Tên</label><input type="text" className="form-control" required /></div>
                      <div className="mb-3"><label className="form-label small fw-semibold">Email</label><input type="email" className="form-control" required /></div>
                      <button type="submit" className="btn btn-success btn-lg w-100 fw-bold shadow-sm py-2">HOÀN TẤT ĐẶT PHÒNG</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}