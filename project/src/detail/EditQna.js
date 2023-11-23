import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QnaContext } from './QnaContext';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function EditQna() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { qnas, setQnas } = useContext(QnaContext);
    const qnaToEdit = qnas.find((qna) => qna.id.toString() === id);

    const [title, setTitle] = useState(qnaToEdit?.title || '');
    const [author, setAuthor] = useState(qnaToEdit?.author || '');
    const [content, setContent] = useState(qnaToEdit?.content || '');
    const [password, setPassword] = useState(''); 
    const [editPassword, setEditPassword] = useState('');
  
    useEffect(() => {
        if (!qnaToEdit) navigate('/Qna'); 
    }, [qnaToEdit, navigate]);

    const handleSave = () => {
        if (qnaToEdit.password === editPassword) { 
            const updatedQnas = qnas.map((qna) =>
            qna.id.toString() === id
                ? { ...qna, title, author, content }
                : qna
            );
        setQnas(updatedQnas);
        navigate('/Qna');
        }
        else {
            alert('비밀번호가 일치하지 않습니다.'); // 일치하지 않으면 경고 메시지 표시
          }
    };

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">한성대학교 컴퓨터공학부</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-md-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Notice">공지사항</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/Community" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        커뮤니티
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/Community">동아리</Link></li>
                                        <li><Link className="dropdown-item" to="/Somoim">소모임</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/IntroMain" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        학부소개
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/IntroWeb">웹공학트랙</Link></li>
                                        <li><Link className="dropdown-item" to="/IntroBig">빅데이터트랙</Link></li>
                                        <li><Link className="dropdown-item" to="/IntroMobile">모바일소프트웨어트랙</Link></li>
                                        <li><Link className="dropdown-item" to="/IntroGraphic">디지털컨텐츠 가상현실트랙</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/IntroMain">교육과정</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Professor">교수진</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Qna">QnA</Link>
                                </li>
                            </ul>
                            <button className="btn btn-outline-success" action=""><Link to="/Login">
                                로그인
                            </Link></button>
                        </div>
                    </div>
                </nav>
            </header>


            <div className="board_wrap">
                <div className="board_title">
                    <strong>Q&A 수정</strong>
                </div>
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div className="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" placeholder="제목 입력" value={title} onChange={(e) => setTitle(e.target.value)} /></dd>
                            </dl>
                        </div>
                        <div className="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd><input type="text" placeholder="글쓴이 입력" value={author} onChange={(e) => setAuthor(e.target.value)} /></dd>
                            </dl>
                        </div>
                        <div className="cont">
                            <textarea placeholder="내용 입력" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>
                        <dl>
          <dt>비밀번호</dt>
          <dd>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={editPassword}
              onChange={(e) => setEditPassword(e.target.value)}
            />
          </dd>
        </dl>
                    </div>
                    <div className="bt_wrap">
                        <button onClick={handleSave} style={{
                            display: 'inline-block',
                            minWidth: '80px',
                            marginLeft: '10px',
                            padding: '10px',
                            border: '1px solid #000',
                            borderRadius: '2px',
                            fontSize: '16px', // 폰트 크기를 16px로 변경
                            background: '#000',
                            color: '#fff',
                        }}>저장</button>
                        {/* Changed from <a> to <button> and added onClick event for handleSave */}
                        <button onClick={() => navigate('/Qna')} style={{
                            display: 'inline-block',
                            minWidth: '80px',
                            padding: '10px',
                            border: '1px solid #000',
                            borderRadius: '2px',
                            fontSize: '16px', // 폰트 크기를 16px로 변경
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>취소</button>
                        {/* Added navigate function to cancel button */}
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-container">
             
                    <div className="footer-info">
                        <p>02876 서울특별시 성북구 삼선교로 16길(삼선동2가) 116 한성대학교</p>
                        <p>대표 02-760-4114 입학 02-760-5800</p>
                    </div>
                    <div className="footer-copy">
                        <p>COPYRIGHT(c) HANSUNGUNIVERSITY. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default EditQna;