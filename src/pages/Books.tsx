import { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import Loading from "../utils/Loading";
import { AddBookInputs } from "./AddBook";

const Books = () => {
    const { data: books, isLoading } = useGetBooksQuery(undefined)
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    if (isLoading) {
        return <Loading></Loading>
    }

    // Search books by title or author
    const searchedBooks: AddBookInputs[] = books?.data?.filter((book: AddBookInputs) => {
        const titleMatch = book.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const authorMatch = book.author
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const genreMatch = book.genre
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return titleMatch || authorMatch || genreMatch;
    });

    // Extract unique genres from the book data
    const genres = [
        ...new Set(books?.data?.map((book: AddBookInputs) => book.genre)),
    ];

    // Extract unique years from the book data
    const years = [
        ...new Set(
            books?.data?.map((book: AddBookInputs) =>
                new Date(book.publicationDate).getFullYear().toString()
            )
        ),
    ];

    // Filter books by genre
    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(e.target.value);
    };

    // Filter books by publication year
    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    const filteredBooksByGenreAndYear = searchedBooks?.filter(
        (book: AddBookInputs) => {
            const genreMatch =
                !selectedGenre ||
                book.genre.toLowerCase() === selectedGenre.toLowerCase();
            const yearMatch =
                !selectedYear ||
                new Date(book.publicationDate).getFullYear().toString() ===
                selectedYear;
            return genreMatch && yearMatch;
        }
    );

    // Reset filters
    const resetFilters = () => {
        setSearchTerm("");
        setSelectedGenre("");
        setSelectedYear("");
    };

    return (
        <div>
            <div className="grid lg:grid-cols-10 grid-cols-1 gap-4 lg:p-12 p-4 bg-gray-300">
                <div className="col-span-6">
                    <input
                        type="text"
                        placeholder="Search by Title or Author"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                </div>

                <div className="flex lg:gap-4 gap-2 col-span-4">
                    <select
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
                    >
                        <option value="">All Genres</option>
                        {(genres as string[]).map((genre, i) => (
                            <option key={i} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">All Years</option>
                        {(years as string[]).map((year, i) => (
                            <option key={i} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={resetFilters}
                        className="btn btn-primary"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
            <div className=" py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 lg:pl-10  bg-gray-200">
                {filteredBooksByGenreAndYear.map((book: AddBookInputs) => (
                    <BookCard
                        key={book._id}
                        book={book}
                    ></BookCard>
                ))}
            </div>
        </div>
    );
};

export default Books;