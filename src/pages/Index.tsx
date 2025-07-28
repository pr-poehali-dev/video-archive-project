import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [playlists, setPlaylists] = useState<string[]>([]);

  const creators = [
    {
      id: 1,
      name: 'TechGuru',
      subscribers: '1.2M',
      avatar: '/img/4f190b52-5f34-4075-83cb-5608e15600aa.jpg',
      isVerified: true
    },
    {
      id: 2,
      name: 'GameMaster',
      subscribers: '890K',
      avatar: '/img/4f190b52-5f34-4075-83cb-5608e15600aa.jpg',
      isVerified: true
    },
    {
      id: 3,
      name: 'CookingPro',
      subscribers: '2.1M',
      avatar: '/img/4f190b52-5f34-4075-83cb-5608e15600aa.jpg',
      isVerified: false
    },
    {
      id: 4,
      name: 'MusicVibes',
      subscribers: '750K',
      avatar: '/img/4f190b52-5f34-4075-83cb-5608e15600aa.jpg',
      isVerified: true
    }
  ];

  const latestVideos = [
    {
      id: 1,
      title: 'Новые технологии 2024: Что изменится?',
      author: 'TechGuru',
      views: '150K',
      duration: '12:34',
      thumbnail: '/img/af9c21ae-cf94-4ed1-9635-5721204810fe.jpg',
      uploadTime: '2 часа назад'
    },
    {
      id: 2,
      title: 'Лучшие игры января - Топ 10',
      author: 'GameMaster',
      views: '89K',
      duration: '15:22',
      thumbnail: '/img/444f629f-7b7c-464b-b671-afc871241e9a.jpg',
      uploadTime: '4 часа назад'
    },
    {
      id: 3,
      title: 'Секрет идеального борща',
      author: 'CookingPro',
      views: '45K',
      duration: '8:15',
      thumbnail: '/img/d365b4c9-dda0-43e1-8562-1b4df632a370.jpg',
      uploadTime: '6 часов назад'
    },
    {
      id: 4,
      title: 'Новый альбом - разбор треков',
      author: 'MusicVibes',
      views: '67K',
      duration: '20:45',
      thumbnail: '/img/8e5f4f63-94bd-4483-9a7f-4d6d830323f0.jpg',
      uploadTime: '1 день назад'
    }
  ];

  const popularVideos = [
    {
      id: 5,
      title: 'Как создать сайт за 5 минут',
      author: 'TechGuru',
      views: '2.3M',
      duration: '5:42',
      thumbnail: '/img/8e5f4f63-94bd-4483-9a7f-4d6d830323f0.jpg',
      uploadTime: '2 недели назад'
    },
    {
      id: 6,
      title: 'Эпичная битва в CS2',
      author: 'GameMaster',
      views: '1.8M',
      duration: '18:30',
      thumbnail: '/img/e5831ed6-2e37-4697-8f57-2e55660cc1fe.jpg',
      uploadTime: '1 месяц назад'
    },
    {
      id: 7,
      title: 'Рецепт пиццы от шеф-повара',
      author: 'CookingPro',
      views: '3.1M',
      duration: '14:20',
      thumbnail: '/img/d365b4c9-dda0-43e1-8562-1b4df632a370.jpg',
      uploadTime: '3 недели назад'
    },
    {
      id: 8,
      title: 'Хиты 90-х - ностальгия',
      author: 'MusicVibes',
      views: '2.7M',
      duration: '45:12',
      thumbnail: '/img/8e5f4f63-94bd-4483-9a7f-4d6d830323f0.jpg',
      uploadTime: '2 месяца назад'
    }
  ];

  const addToPlaylist = (videoId: number) => {
    const playlistName = prompt('Название плейлиста:');
    if (playlistName) {
      setPlaylists([...playlists, playlistName]);
      alert(`Видео добавлено в плейлист "${playlistName}"`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">VideoHub</h1>
              <Icon name="Menu" size={24} className="lg:hidden" />
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск видео..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90"
                >
                  <Icon name="Search" size={16} />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar>
                <AvatarImage src="/img/4f190b52-5f34-4075-83cb-5608e15600aa.jpg" />
                <AvatarFallback>У</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Creators Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Популярные авторы</h2>
            <Button variant="outline">
              Все авторы
              <Icon name="ChevronRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator) => (
              <Card key={creator.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={creator.avatar} />
                    <AvatarFallback>{creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="font-semibold text-lg">{creator.name}</h3>
                    {creator.isVerified && (
                      <Icon name="CheckCircle" size={16} className="ml-2 text-primary" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{creator.subscribers} подписчиков</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Videos */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Последние видео</h2>
            <Button variant="outline">
              Все новые
              <Icon name="ChevronRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToPlaylist(video.id);
                      }}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{video.author}</p>
                  <div className="flex items-center text-muted-foreground text-xs space-x-2">
                    <span>{video.views} просмотров</span>
                    <span>•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Videos */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Популярные видео</h2>
            <Button variant="outline">
              Топ-100
              <Icon name="TrendingUp" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <Badge className="absolute top-2 left-2 bg-primary">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    Популярное
                  </Badge>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToPlaylist(video.id);
                      }}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{video.author}</p>
                  <div className="flex items-center text-muted-foreground text-xs space-x-2">
                    <span>{video.views} просмотров</span>
                    <span>•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Playlists Section */}
        {playlists.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Мои плейлисты</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {playlists.map((playlist, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="ListMusic" size={20} className="text-primary" />
                      <h3 className="font-semibold">{playlist}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;