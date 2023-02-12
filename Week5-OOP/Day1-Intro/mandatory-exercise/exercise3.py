from typing import List


class Song:
    def __init__(self, lyrics: List[str]):
        self.lyrics = lyrics

    # this method is instead of sing_me_a_song method
    # it's just simpler, and was made exactly for this use
    def __str__(self):
        text: str = ""
        for lyric in self.lyrics:
            text += lyric + '\n'
        return text


def main():
    stairway: Song = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
    print(stairway)


if __name__ == "__main__":
    main()
