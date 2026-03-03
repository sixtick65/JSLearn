import initSqlite from 'https://unpkg.com/@sqlite.org/sqlite-wasm@3.49.2-build1/index.mjs';

let db;

async function init() {
    const sqlite3 = await initSqlite();
    
    // 'local' 설정 시 IndexedDB를 백엔드로 사용하는 kvvfs 가동
    // 브라우저를 껐다 켜도 데이터가 유지됨
    db = new sqlite3.oo1.JsStorageDb('local');

    console.log("SQLite 가동 및 IndexedDB 연결 완료");

    // 초기 테이블 생성
    db.exec("CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT);");
    
    // 데이터 로드
    renderTable();
}

// 데이터 저장 함수
async function saveData() {
    const key = document.getElementById('inputKey').value;
    const value = document.getElementById('inputValue').value;

    if (!key || !value) return alert("키와 값을 입력하세요.");

    try {
        db.exec({
            sql: "INSERT OR REPLACE INTO kv_store (key, value) VALUES (?, ?)",
            bind: [key, value]
        });
        
        document.getElementById('inputKey').value = '';
        document.getElementById('inputValue').value = '';
        
        renderTable();
    } catch (err) {
        console.error("저장 실패:", err);
    }
}

// 테이블 렌더링 함수
function renderTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';

    const rows = [];
    db.exec({
        sql: "SELECT * FROM kv_store",
        rowMode: 'object',
        callback: (row) => rows.push(row)
    });

    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.key}</td>
            <td>${row.value}</td>
            <td><button onclick="deleteData('${row.key}')">삭제</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// 전역 삭제 함수 (편의상 window에 할당)
window.deleteData = (key) => {
    db.exec({
        sql: "DELETE FROM kv_store WHERE key = ?",
        bind: [key]
    });
    renderTable();
};

document.getElementById('btnSave').addEventListener('click', saveData);

// 실행
init();