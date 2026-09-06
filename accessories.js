<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Accessories — DeviceCare</title>

    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    >

    <style>
        * {
            scroll-behavior: smooth;
        }

        body {
            font-family: "Inter", sans-serif;
            background: #050505;
            color: white;
        }

        h1,
        h2,
        h3,
        h4 {
            font-family: "Space Grotesk", sans-serif;
        }

        .lime {
            color: #d8ff3e;
        }

        .bg-lime {
            background: #d8ff3e;
        }

        .glass {
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(18px);
        }

        .grid-bg {
            background-image:
                linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 45px 45px;
        }

        .product-card {
            transition: 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-6px);
            border-color: rgba(216,255,62,0.45);
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .filter-btn {
            transition: 0.25s ease;
        }

        .filter-btn.active {
            background: #d8ff3e;
            color: #050505;
            border-color: #d8ff3e;
        }

        .product-image {
            background:
                radial-gradient(
                    circle at center,
                    rgba(216,255,62,0.10),
                    transparent 65%
                );
        }

        .cart-panel {
            transition: 0.3s ease;
        }

        .cart-overlay {
            background: rgba(0,0,0,0.65);
            backdrop-filter: blur(5px);
        }

        input:focus {
            outline: none;
            border-color: #d8ff3e !important;
        }
    </style>
</head>

<body>

    <!-- ================= NAVBAR ================= -->

    <header class="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">

        <nav class="max-w-7xl mx-auto px-5 lg:px-8">

            <div class="h-20 flex items-center justify-between">

                <!-- Logo -->

                <a href="index.html" class="flex items-center gap-3">

                    <div
                        class="w-10 h-10 rounded-xl bg-lime text-black flex items-center justify-center font-bold"
                    >
                        D
                    </div>

                    <div>

                        <h1 class="text-lg font-bold">
                            Device<span class="lime">Care</span>
                        </h1>

                        <p class="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                            Repair Experts
                        </p>

                    </div>

                </a>


                <!-- Desktop Nav -->

                <div class="hidden md:flex items-center gap-8 text-sm">

                    <a
                        href="index.html"
                        class="text-gray-400 hover:text-[#d8ff3e] transition"
                    >
                        Home
                    </a>

                    <a
                        href="services.html"
                        class="text-gray-400 hover:text-[#d8ff3e] transition"
                    >
                        Services
                    </a>

                    <a
                        href="repair.html"
                        class="text-gray-400 hover:text-[#d8ff3e] transition"
                    >
                        Repair
                    </a>

                    <a
                        href="accessories.html"
                        class="text-white"
                    >
                        Accessories
                    </a>

                    <a
                        href="locations.html"
                        class="text-gray-400 hover:text-[#d8ff3e] transition"
                    >
                        Locations
                    </a>

                    <a
                        href="about.html"
                        class="text-gray-400 hover:text-[#d8ff3e] transition"
                    >
                        About
                    </a>

                    <a
                        href="contact.html"
                        class="text-gray-400 hover:text-[#d8ff3e] transition"
                    >
                        Contact
                    </a>

                </div>


                <!-- Cart -->

                <div class="flex items-center gap-3">

                    <button
                        id="cartBtn"
                        class="relative w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center hover:border-[#d8ff3e] transition"
                    >

                        🛒

                        <span
                            id="cartCount"
                            class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lime text-black text-[10px] font-bold flex items-center justify-center"
                        >
                            0
                        </span>

                    </button>


                    <button
                        id="menuBtn"
                        class="md:hidden w-11 h-11 border border-white/10 rounded-xl"
                    >
                        ☰
                    </button>

                </div>

            </div>


            <!-- Mobile Menu -->

            <div
                id="mobileMenu"
                class="hidden md:hidden pb-6 border-t border-white/10"
            >

                <div class="flex flex-col gap-5 pt-5 text-sm">

                    <a href="index.html" class="text-gray-400">
                        Home
                    </a>

                    <a href="services.html" class="text-gray-400">
                        Services
                    </a>

                    <a href="repair.html" class="text-gray-400">
                        Repair
                    </a>

                    <a href="accessories.html" class="text-white">
                        Accessories
                    </a>

                    <a href="locations.html" class="text-gray-400">
                        Locations
                    </a>

                    <a href="about.html" class="text-gray-400">
                        About
                    </a>

                    <a href="contact.html" class="text-gray-400">
                        Contact
                    </a>

                </div>

            </div>

        </nav>

    </header>



    <!-- ================= MAIN ================= -->

    <main class="pt-32 pb-24">


        <!-- HERO -->

        <section class="grid-bg border-b border-white/5">

            <div class="max-w-7xl mx-auto px-5 lg:px-8 py-20">

                <div class="max-w-3xl">

                    <p class="lime text-xs uppercase tracking-[0.25em] font-semibold">
                        Device Accessories
                    </p>

                    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mt-4">

                        Better gear.
                        <br>

                        <span class="text-gray-500">
                            Better device.
                        </span>

                    </h1>

                    <p class="text-gray-400 text-lg leading-8 mt-6 max-w-2xl">

                        Shop everyday accessories designed to protect,
                        charge and improve your devices.

                    </p>

                </div>

            </div>

        </section>



        <!-- ================= SHOP ================= -->

        <section class="py-20">

            <div class="max-w-7xl mx-auto px-5 lg:px-8">


                <!-- Search -->

                <div class="flex flex-col lg:flex-row gap-5 justify-between mb-10">

                    <div class="relative w-full lg:max-w-md">

                        <span
                            class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            🔎
                        </span>

                        <input
                            id="productSearch"
                            type="text"
                            placeholder="Search accessories..."
                            class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-12 py-4 text-sm"
                        >

                    </div>


                    <!-- Filters -->

                    <div class="flex flex-wrap gap-3">

                        <button
                            class="filter-btn active border border-white/10 rounded-full px-5 py-3 text-sm"
                            data-category="all"
                        >
                            All
                        </button>

                        <button
                            class="filter-btn border border-white/10 rounded-full px-5 py-3 text-sm text-gray-400"
                            data-category="cases"
                        >
                            Cases
                        </button>

                        <button
                            class="filter-btn border border-white/10 rounded-full px-5 py-3 text-sm text-gray-400"
                            data-category="charging"
                        >
                            Charging
                        </button>

                        <button
                            class="filter-btn border border-white/10 rounded-full px-5 py-3 text-sm text-gray-400"
                            data-category="audio"
                        >
                            Audio
                        </button>

                        <button
                            class="filter-btn border border-white/10 rounded-full px-5 py-3 text-sm text-gray-400"
                            data-category="protection"
                        >
                            Protection
                        </button>

                    </div>

                </div>



                <!-- Products -->

                <div
                    id="productGrid"
                    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                </div>


                <!-- Empty -->

                <div
                    id="emptyProducts"
                    class="hidden text-center py-20"
                >

                    <div class="text-5xl">
                        🔍
                    </div>

                    <h3 class="text-2xl font-bold mt-5">
                        No products found
                    </h3>

                    <p class="text-gray-500 mt-2">
                        Try a different search or category.
                    </p>

                </div>

            </div>

        </section>



        <!-- ================= TRUST ================= -->

        <section class="border-y border-white/5 bg-[#090909]">

            <div class="max-w-7xl mx-auto px-5 lg:px-8 py-16">

                <div class="grid sm:grid-cols-3 gap-8">

                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-2xl bg-[#d8ff3e]/10 flex items-center justify-center"
                        >
                            🛡️
                        </div>

                        <div>

                            <h3 class="font-bold">
                                Quality Products
                            </h3>

                            <p class="text-sm text-gray-500 mt-1">
                                Carefully selected accessories.
                            </p>

                        </div>

                    </div>


                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-2xl bg-[#d8ff3e]/10 flex items-center justify-center"
                        >
                            🚚
                        </div>

                        <div>

                            <h3 class="font-bold">
                                Convenient Pickup
                            </h3>

                            <p class="text-sm text-gray-500 mt-1">
                                Pick up at participating stores.
                            </p>

                        </div>

                    </div>


                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-2xl bg-[#d8ff3e]/10 flex items-center justify-center"
                        >
                            ✓
                        </div>

                        <div>

                            <h3 class="font-bold">
                                DeviceCare Tested
                            </h3>

                            <p class="text-sm text-gray-500 mt-1">
                                Accessories selected for reliability.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </main>



    <!-- ================= CART OVERLAY ================= -->

    <div
        id="cartOverlay"
        class="hidden fixed inset-0 z-[60] cart-overlay"
    ></div>


    <!-- ================= CART PANEL ================= -->

    <aside
        id="cartPanel"
        class="fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-[#0b0b0b] border-l border-white/10 translate-x-full transition-transform duration-300"
    >

        <div class="h-full flex flex-col">


            <!-- Cart Header -->

            <div class="flex items-center justify-between p-6 border-b border-white/10">

                <div>

                    <p class="lime text-xs uppercase tracking-wider">
                        Your Cart
                    </p>

                    <h2 class="text-2xl font-bold mt-1">
                        Shopping Bag
                    </h2>

                </div>


                <button
                    id="closeCart"
                    class="w-10 h-10 rounded-xl border border-white/10"
                >
                    ✕
                </button>

            </div>


            <!-- Cart Items -->

            <div
                id="cartItems"
                class="flex-1 overflow-y-auto p-6"
            >
            </div>


            <!-- Empty Cart -->

            <div
                id="emptyCart"
                class="hidden flex-1 items-center justify-center text-center p-6"
            >

                <div>

                    <div class="text-5xl">
                        🛒
                    </div>

                    <h3 class="text-xl font-bold mt-5">
                        Your cart is empty
                    </h3>

                    <p class="text-gray-500 text-sm mt-2">
                        Add something you like from the shop.
                    </p>

                </div>

            </div>


            <!-- Cart Footer -->

            <div class="border-t border-white/10 p-6">

                <div class="flex justify-between items-center">

                    <span class="text-gray-500">
                        Total
                    </span>

                    <span
                        id="cartTotal"
                        class="text-2xl font-bold"
                    >
                        $0.00
                    </span>

                </div>


                <button
                    id="checkoutBtn"
                    class="w-full mt-5 bg-lime text-black py-4 rounded-2xl font-bold hover:bg-white transition"
                >
                    Continue to Checkout →
                </button>

            </div>

        </div>

    </aside>



    <!-- ================= FOOTER ================= -->

    <footer class="border-t border-white/10 bg-[#030303]">

        <div class="max-w-7xl mx-auto px-5 lg:px-8 py-14">

            <div class="grid md:grid-cols-4 gap-10">

                <div class="md:col-span-2">

                    <div class="flex items-center gap-3">

                        <div
                            class="w-10 h-10 rounded-xl bg-lime text-black flex items-center justify-center font-bold"
                        >
                            D
                        </div>

                        <h2 class="font-bold text-lg">
                            Device<span class="lime">Care</span>
                        </h2>

                    </div>

                    <p class="text-gray-500 text-sm leading-6 max-w-md mt-5">
                        Professional device repair and carefully selected
                        accessories across the USA.
                    </p>

                </div>


                <div>

                    <h3 class="font-semibold">
                        Company
                    </h3>

                    <div class="flex flex-col gap-3 mt-5 text-sm text-gray-500">

                        <a href="about.html" class="hover:text-[#d8ff3e]">
                            About
                        </a>

                        <a href="services.html" class="hover:text-[#d8ff3e]">
                            Services
                        </a>

                        <a href="locations.html" class="hover:text-[#d8ff3e]">
                            Locations
                        </a>

                        <a href="contact.html" class="hover:text-[#d8ff3e]">
                            Contact
                        </a>

                    </div>

                </div>


                <div>

                    <h3 class="font-semibold">
                        Get Started
                    </h3>

                    <div class="flex flex-col gap-3 mt-5 text-sm text-gray-500">

                        <a href="repair.html" class="hover:text-[#d8ff3e]">
                            Book a Repair
                        </a>

                        <a href="accessories.html" class="text-white">
                            Accessories
                        </a>

                    </div>

                </div>

            </div>


            <div class="border-t border-white/10 mt-12 pt-6">

                <p class="text-xs text-gray-600">
                    © 2026 DeviceCare. All rights reserved.
                </p>

            </div>

        </div>

    </footer>



    <!-- JavaScript -->

    <script src="js/accessories.js"></script>

</body>
</html>