'use client';

import { motion } from 'motion/react';
import {
    Activity,
    MessageSquare,
    Clock,
    ArrowDownToLine,
    ChartColumnBig,
    Bot,
    ArrowUpFromLine,
    Rewind,
    DollarSign,
    FastForward
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useStatsTotal, useStatsToday, useStatsWeek } from '@/api/endpoints/stats';
import { AnimatedNumber } from '@/components/common/AnimatedNumber';
import { EASING } from '@/lib/animations/fluid-transitions';


export function Total() {
    const { data: statsTotalFormatted } = useStatsTotal();
    const { data: statsTodayFormatted } = useStatsToday();
    const { data: statsWeekFormatted } = useStatsWeek();
    const t = useTranslations('home.total');

    const cards = [
        {
            title: t('requestStats'),
            headerIcon: Activity,
            items: [
                {
                    label: t('requestCount'),
                    value: statsTotalFormatted?.request_count.formatted.value,
                    icon: MessageSquare,
                    color: 'text-primary',
                    bgColor: 'bg-primary/10',
                    unit: statsTotalFormatted?.request_count.formatted.unit
                },
                {
                    label: t('timeConsumed'),
                    value: statsTotalFormatted?.wait_time.formatted.value,
                    icon: Clock,
                    color: 'text-primary',
                    bgColor: 'bg-accent/10',
                    unit: statsTotalFormatted?.wait_time.formatted.unit
                }
            ]
        },
        {
            title: t('totalStats'),
            headerIcon: ChartColumnBig,
            items: [
                {
                    label: t('totalToken'),
                    value: statsTotalFormatted?.total_token.formatted.value,
                    icon: Bot,
                    color: 'text-primary',
                    bgColor: 'bg-chart-1/10',
                    unit: statsTotalFormatted?.total_token.formatted.unit
                },
                {
                    label: t('totalCost'),
                    value: statsTotalFormatted?.total_cost.formatted.value,
                    icon: DollarSign,
                    color: 'text-primary',
                    bgColor: 'bg-chart-2/10',
                    unit: statsTotalFormatted?.total_cost.formatted.unit
                }
            ]
        },
        {
            title: t('inputStats'),
            headerIcon: ArrowDownToLine,
            items: [
                {
                    label: t('inputTokens'),
                    value: statsTotalFormatted?.input_token.formatted.value,
                    icon: Rewind,
                    color: 'text-primary',
                    bgColor: 'bg-chart-3/10',
                    unit: statsTotalFormatted?.input_token.formatted.unit
                },
                {
                    label: t('inputCost'),
                    value: statsTotalFormatted?.input_cost.formatted.value,
                    icon: DollarSign,
                    color: 'text-primary',
                    bgColor: 'bg-chart-3/10',
                    unit: statsTotalFormatted?.input_cost.formatted.unit
                }
            ]
        },
        {
            title: t('outputStats'),
            headerIcon: ArrowUpFromLine,
            items: [
                {
                    label: t('outputTokens'),
                    value: statsTotalFormatted?.output_token.formatted.value,
                    icon: FastForward,
                    color: 'text-primary',
                    bgColor: 'bg-chart-4/10',
                    unit: statsTotalFormatted?.output_token.formatted.unit
                },
                {
                    label: t('outputCost'),
                    value: statsTotalFormatted?.output_cost.formatted.value,
                    icon: DollarSign,
                    color: 'text-primary',
                    bgColor: 'bg-chart-4/10',
                    unit: statsTotalFormatted?.output_cost.formatted.unit
                }
            ]
        }
    ];

    // 合并今日和本周统计为四个小块
    const todayWeekCards = [
        {
            title: t('todayStats'),
            headerIcon: Activity,
            items: [
                {
                    label: t('requestCount'),
                    value: statsTodayFormatted?.request_count.formatted.value,
                    icon: MessageSquare,
                    color: 'text-primary',
                    bgColor: 'bg-primary/10',
                    unit: statsTodayFormatted?.request_count.formatted.unit
                },
                {
                    label: t('timeConsumed'),
                    value: statsTodayFormatted?.wait_time.formatted.value,
                    icon: Clock,
                    color: 'text-primary',
                    bgColor: 'bg-accent/10',
                    unit: statsTodayFormatted?.wait_time.formatted.unit
                }
            ]
        },
        {
            title: t('todayTotalStats'),
            headerIcon: ChartColumnBig,
            items: [
                {
                    label: t('totalToken'),
                    value: statsTodayFormatted?.total_token.formatted.value,
                    icon: Bot,
                    color: 'text-primary',
                    bgColor: 'bg-chart-1/10',
                    unit: statsTodayFormatted?.total_token.formatted.unit
                },
                {
                    label: t('totalCost'),
                    value: statsTodayFormatted?.total_cost.formatted.value,
                    icon: DollarSign,
                    color: 'text-primary',
                    bgColor: 'bg-chart-2/10',
                    unit: statsTodayFormatted?.total_cost.formatted.unit
                }
            ]
        },
        {
            title: t('weekStats'),
            headerIcon: Activity,
            items: [
                {
                    label: t('requestCount'),
                    value: statsWeekFormatted?.request_count.formatted.value,
                    icon: MessageSquare,
                    color: 'text-primary',
                    bgColor: 'bg-primary/10',
                    unit: statsWeekFormatted?.request_count.formatted.unit
                },
                {
                    label: t('timeConsumed'),
                    value: statsWeekFormatted?.wait_time.formatted.value,
                    icon: Clock,
                    color: 'text-primary',
                    bgColor: 'bg-accent/10',
                    unit: statsWeekFormatted?.wait_time.formatted.unit
                }
            ]
        },
        {
            title: t('weekTotalStats'),
            headerIcon: ChartColumnBig,
            items: [
                {
                    label: t('totalToken'),
                    value: statsWeekFormatted?.total_token.formatted.value,
                    icon: Bot,
                    color: 'text-primary',
                    bgColor: 'bg-chart-1/10',
                    unit: statsWeekFormatted?.total_token.formatted.unit
                },
                {
                    label: t('totalCost'),
                    value: statsWeekFormatted?.total_cost.formatted.value,
                    icon: DollarSign,
                    color: 'text-primary',
                    bgColor: 'bg-chart-2/10',
                    unit: statsWeekFormatted?.total_cost.formatted.unit
                }
            ]
        }
    ];

    return (
        <div className="space-y-4">
            {/* 历史总计 */}
            <div>
                <h2 className="text-lg font-semibold mb-3 text-muted-foreground">{t('allTimeStats')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map((card, index) => (
                        <motion.section
                            key={index}
                            className="rounded-3xl bg-card border-card-border border p-5 text-card-foreground custom-shadow flex flex-row items-center gap-4"
                            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{
                                duration: 0.5,
                                ease: EASING.easeOutExpo,
                                delay: index * 0.08,
                            }}
                        >
                            <div className="flex flex-col items-center justify-center gap-3 border-r border-border/50 pr-4 py-1 self-stretch">
                                <card.headerIcon className="w-4 h-4" />
                                <h3 className="font-medium text-sm [writing-mode:vertical-lr]">{card.title}</h3>
                            </div>

                            <div className="flex flex-col gap-4 flex-1 min-w-0">
                                {card.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bgColor} ${item.color}`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-xs text-muted-foreground">{item.label}</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-xl">
                                                    <AnimatedNumber value={item.value} />
                                                </span>
                                                {item.unit && (
                                                    <span className="text-sm text-muted-foreground">{item.unit}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>

            {/* 今日和本周统计 - 合并为一行四个小块 */}
            <div>
                <h2 className="text-lg font-semibold mb-3 text-muted-foreground">{t('todayWeekStatsTitle')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {todayWeekCards.map((card, index) => (
                        <motion.section
                            key={`todayweek-${index}`}
                            className="rounded-3xl bg-card border-card-border border p-5 text-card-foreground custom-shadow flex flex-row items-center gap-4"
                            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{
                                duration: 0.5,
                                ease: EASING.easeOutExpo,
                                delay: index * 0.08,
                            }}
                        >
                            <div className="flex flex-col items-center justify-center gap-3 border-r border-border/50 pr-4 py-1 self-stretch">
                                <card.headerIcon className="w-4 h-4" />
                                <h3 className="font-medium text-sm [writing-mode:vertical-lr]">{card.title}</h3>
                            </div>

                            <div className="flex flex-col gap-4 flex-1 min-w-0">
                                {card.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bgColor} ${item.color}`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-xs text-muted-foreground">{item.label}</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-xl">
                                                    <AnimatedNumber value={item.value} />
                                                </span>
                                                {item.unit && (
                                                    <span className="text-sm text-muted-foreground">{item.unit}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>
        </div>
    );
}
