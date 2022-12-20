# 1. Library

Library yang dipakai adalah react-redux, redux-toolkit, dan redux-persist.
react-redux dan redux-toolkit digunakan untuk proses reduxnya sedangkan redux-persist untuk membantu penyimpanannya.

## 2. Konsep

- Di dalam folder Redux ada file store, itu berguna untuk mensetting store untuk reduxnya
- Lalu rootReducer untuk mengatur data mana saja yang dapat disimpan dan juga ada storage untuk mengatur mau menyimpan dimana
- Folder slices digunakan untuk memanipulasi Global Statenya. Di dalam itu juga bisa langsung menembak API.
- Setelah semuanya di siapkan, untuk memanggil fungsinya menggunakan useDispatch dan memanggil statenya menggunakan useSelector (Ada di file view/home/index.js)
- perhatikan di file App.js ada _persist.rehydrated untuk memastikan kalau semua data sudah di load. disanalah bisa ditaro kondisi untuk memunculkan loading.
- Redux harus ditaro di induk yang paling atas, oleh karena itu bisa ditaro setingannya di store.js
