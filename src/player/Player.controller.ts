import { Controller, Post, Body, Get, Param, Patch, Delete, Put } from '@nestjs/common';
import { PlayerService } from'src/player/Player.service';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';
import { UpdatePlayerDto } from 'src/player/dto/updatePlayerDto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
