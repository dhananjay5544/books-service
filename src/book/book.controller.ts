import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern('get.book')
  getBook(@Payload() { value: { id } }) {
    return this.bookService.getBook(parseInt(id));
  }

  @MessagePattern('get.books')
  getBooks(@Payload() { value: { page, limit } }) {
    return this.bookService.getBooks(parseInt(page), parseInt(limit));
  }

  @MessagePattern('add.book')
  async addBook(@Payload() { value }) {
    const res = await this.bookService.addBook(value);
    return { msg: 'book added', book: res };
  }

  @MessagePattern('update.book')
  async updateBook(@Payload() { value: { id, book } }) {
    return await this.bookService.updateBook(id, book);
  }

  @MessagePattern('delete.book')
  async deleteBook(@Payload() { value: { id } }) {
    return await this.bookService.deleteBook(parseInt(id));
  }
}
